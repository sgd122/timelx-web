import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import { getSession } from 'next-auth/react';

/**
 * @description 페이지별 로그인유무에 따른 접근을 방지합니다.
 * @param type 'loggedIn' | 'notLoggedIn'
 * @description 'loggedIn' 로그인 유저만 접근이 가능합니다.
 * @description 'notLoggedIn' 비로그인 유저만 접근이 가능합니다.
 */
export const withProtect = (
  type: 'loggedIn' | 'notLoggedIn',
  getServerSidePropsFunc: GetServerSideProps
) => {
  return async (
    context: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<Record<string, unknown>>> => {
    const { req, resolvedUrl } = context;

    const session = await getSession({ req });
    const destination = (): string => {
      if (type === 'loggedIn') {
        return `/auth/login?redirect_url=${resolvedUrl}`;
      }

      return '/' as string;
    };

    if (type === 'loggedIn' ? !session : session) {
      return {
        redirect: {
          destination: destination(),
          permanent: false,
        },
      };
    }

    return getServerSidePropsFunc(context);
  };
};
