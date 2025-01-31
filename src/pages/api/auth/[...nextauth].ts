import type { IUser, UserStatus } from '@api/user';
import type { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import type { JWT } from 'next-auth/jwt';
import AppleProvider from 'next-auth/providers/apple';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import KakaoProvider from 'next-auth/providers/kakao';

import { BASE_URL, VERSION } from '@/features/api/config';
import { LOGIN_PROVIDER } from '@/shared/constants/auth';

const BACKEND_API = `${BASE_URL}${VERSION['V2']}`;

interface CustomJWT extends JWT {
  user: { id_token?: string; provider?: string } & IUser;
}

async function getSocialProviderProfile(token: CustomJWT, provider: string) {
  const apiUrl = `${BACKEND_API}/login/social/callback/${provider}`;

  const props =
    provider === LOGIN_PROVIDER['APPLE']
      ? {
          social_token: token?.user?.id_token,
          fullName: null,
          email: token.user?.email,
          path: 'web',
        }
      : { social_token: token?.accessToken };

  const tokenResponse = await fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(props),
    headers: { 'Content-Type': 'application/json' },
  });
  const tokenData = await tokenResponse.json();

  if (tokenResponse.ok && tokenData) {
    const userResponse = await fetch(`${BACKEND_API}/sanctum/check/user`, {
      method: 'POST',
      body: undefined,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenData?.data.token?.plainTextToken}`,
      },
    });
    const {
      data: { user: userData },
    }: UserStatus = await userResponse.json();

    if (userResponse.ok && userData) {
      return {
        ...token,
        user: {
          id: userData.id,
          name: userData.name,
          nick_name: userData.nick_name,
          email: userData.email,
          accessToken: tokenData?.data.token?.plainTextToken,
        },
      };
    }
  }
  return token;
}

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, {
    // NOTE: jwt 사용을 위한 임의의 난수를 할당
    secret: process.env.NEXTAUTH_SECRET,
    // NOTE: 세션 전략을 jwt로 설정
    session: { strategy: 'jwt' },
    // NOTE: custom login page
    pages: {
      signIn: `/auth/login`,
      error: `/auth/login`,
    },
    cookies: {
      pkceCodeVerifier: {
        name: 'next-auth.pkce.code_verifier',
        options: {
          httpOnly: true,
          sameSite: 'none',
          path: '/',
          secure: true,
        },
      },
    },
    providers: [
      AppleProvider({
        clientId: process.env.NEXT_PUBLIC_APPLE_ID as string,
        clientSecret: process.env.NEXT_PUBLIC_APPLE_CLIENT_SECRET as string,
        async profile(profile, tokens) {
          return {
            ...profile,
            id_token: tokens.id_token,
            refresh_token: tokens.refresh_token,
            id: profile.email,
            provider: LOGIN_PROVIDER['APPLE'],
          };
        },
      }),
      KakaoProvider({
        clientId: process.env.NEXT_PUBLIC_KAKAO_API_KEY as string,
        clientSecret: process.env.NEXT_PUBLIC_KAKAO_SECRET as string,
        async profile(profile) {
          return {
            ...profile,
            provider: LOGIN_PROVIDER['KAKAO'],
          };
        },
      }),
      GoogleProvider({
        clientId: process.env.NEXT_PUBLIC_GOOGLE_ID as string,
        clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET as string,
        async profile(profile) {
          return {
            ...profile,
            id: LOGIN_PROVIDER['GOOGLE'],
            provider: LOGIN_PROVIDER['GOOGLE'],
          };
        },
      }),
      CredentialsProvider({
        id: LOGIN_PROVIDER['EMAIL'],
        // The name to display on the sign in form (e.g. 'Sign in with...')
        name: 'Credentials',
        // The credentials is used to generate a suitable form on the sign in page.
        // You can specify whatever fields you are expecting to be submitted.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          email: { label: 'email', type: 'text', placeholder: 'email' },
          password: { label: 'password', type: 'password' },
          type: { label: 'type', type: 'text' },
          token: { label: 'type', type: 'text' },
        },
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        async authorize(credentials): Promise<IUser | null> {
          return {
            id: 1,
            name: '홍길동',
            nick_name: '홍길동',
            email: 'aaa@gmail.com',
            accessToken: 'plainTextToken',
            imageUrl: '',
          };

          const tokenResponse = await fetch(`${BACKEND_API}/login`, {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { 'Content-Type': 'application/json' },
          });
          // NOTE: Example Json
          // {
          //   type: 'login',
          //   status: 'success',
          //   data: {
          //     token: {
          //       accessToken: [Object],
          //       plainTextToken: '45108|e5TYw'
          //     }
          //   }
          // }
          const token = await tokenResponse.json();
          if (tokenResponse.ok && token) {
            const userResponse = await fetch(
              `${BACKEND_API}/sanctum/check/user`,
              {
                method: 'POST',
                body: undefined,
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token?.data.token?.plainTextToken}`,
                },
              }
            );
            const {
              data: { user },
            }: UserStatus = await userResponse.json();

            if (userResponse.ok && user) {
              return {
                id: user.id,
                name: user.name,
                nick_name: user.nick_name,
                email: user.email,
                accessToken: token?.data.token?.plainTextToken,
                imageUrl: '',
              };
            }
          }

          // Return null if user data could not be retrieved
          return null;
        },
      }),
    ],
    callbacks: {
      /**
       * ANCHOR: JWT Callback
       * 웹 토큰이 실행 혹은 업데이트될때마다 콜백이 실행
       * 반환된 값은 암호화되어 쿠키에 저장됨
       */
      async jwt({ token, trigger, session, account, user }) {
        // NOTE: 회원정보 업데이트
        if (trigger === 'update') {
          Object.keys(session).forEach((key) => {
            (token.user as Record<string, unknown>)[key] = session[key];
          });
        }

        if (account && user) {
          return {
            ...token,
            accessToken: account.access_token,
            accessTokenExpires: account.accessTokenExpires,
            refreshToken: account.refreshToken,
            user,
          };
        }

        const customToken = token as CustomJWT;
        const provider = `${customToken?.user?.provider}`;
        if (
          provider === LOGIN_PROVIDER['KAKAO'] ||
          provider === LOGIN_PROVIDER['APPLE'] ||
          provider === LOGIN_PROVIDER['GOOGLE']
        ) {
          const result = await getSocialProviderProfile(customToken, provider);
          return result;
        }
        return token;
      },

      /**
       * ANCHOR: Session Callback
       * ClientSide에서 NextAuth에 세션을 체크할때마다 실행
       * 반환된 값은 useSession을 통해 ClientSide에서 사용할 수 있음
       * JWT 토큰의 정보를 Session에 유지 시킨다.
       */
      async session({ session, token }) {
        session.user = token.user as IUser;
        return session;
      },
    },
    debug: false,
  });
}
