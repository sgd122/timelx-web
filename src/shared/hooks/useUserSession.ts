import type { IUser } from '@api/user';
import { useSession } from 'next-auth/react';

interface ReturnProps {
  isLoading: boolean;
  isAuthenticated: boolean;
  isUnAuthenticated: boolean;
  user?: IUser;
}

export const useUserSession = () => {
  // TODO: 로딩에 대한 처리방침 세우기
  const session = useSession();
  const { status, data } = session;
  const _user = data?.user as IUser | undefined;

  const returnProps: ReturnProps = {
    isLoading: status === 'loading',
    isAuthenticated: status === 'authenticated',
    isUnAuthenticated: status === 'unauthenticated',
    user: _user
      ? {
          id: _user.id,
          nickname: _user.nickname,
          avatarUrl: _user.avatarUrl,
          email: _user.email,
          accessToken: _user.accessToken,
        }
      : undefined,
  };

  return returnProps;
};
