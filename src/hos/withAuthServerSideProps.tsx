import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import { getSession } from 'next-auth/react';

import instance from '@/api';

export const withAuthServerSideProps =
  <P extends Record<string, unknown>>(
    getServerSidePropsFunction: GetServerSideProps<P>
  ) =>
  async (
    context: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const session = await getSession({ req: context.req });

    if (session?.user?.accessToken) {
      const accessToken = session.user.accessToken;
      instance.defaults.headers.common['Authorization'] =
        `Bearer ${accessToken}`;
    }
    const res = await getServerSidePropsFunction(context);

    instance.defaults.headers.common['Authorization'] = '';

    return res;
  };
