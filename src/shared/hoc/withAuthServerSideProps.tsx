import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import { getSession } from 'next-auth/react';

import instance from '@/features/api';

export const withAuthServerSideProps =
  <P extends Record<string, unknown>>(
    getServerSidePropsFunction: GetServerSideProps<P>
  ) =>
  async (
    context: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const session = await getSession({ req: context.req });
    const isAuthenticated = session?.user?.accessToken;

    if (isAuthenticated) {
      const accessToken = session.user.accessToken;
      instance.defaults.headers.common['Authorization'] =
        `Bearer ${accessToken}`;
    }
    const res = await getServerSidePropsFunction(context);

    instance.defaults.headers.common['Authorization'] = '';

    const userId = session?.user?.id;
    const props = {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ...res.props,
    };

    if (userId !== undefined) {
      props.userId = userId; // ✅ userId가 undefined가 아닐 때만 추가
    }

    return {
      ...res,
      props,
    };
  };
