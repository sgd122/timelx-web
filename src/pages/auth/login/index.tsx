import { dehydrate, QueryClient } from '@tanstack/react-query';
import type { GetServerSideProps } from 'next';

import { PAGE_TITLE } from '@/shared/constants/title';
import { withAuthServerSideProps } from '@/shared/hoc/withAuthServerSideProps';
import type { PageDefaultProps } from '@/shared/types/page-props';
import { LogScreen } from '@/shared/ui/LogScreen';
import AuthLoginContainer from '@/views/auth-login';

interface AuthLoginPageProps extends PageDefaultProps {
  authError?: string;
}

const AuthLoginPage = ({ authError, userId }: AuthLoginPageProps) => {
  return (
    <LogScreen params={{ title: PAGE_TITLE.AUTH_LOGIN }} userId={userId}>
      <AuthLoginContainer authError={authError} />
    </LogScreen>
  );
};

export default AuthLoginPage;

const getServerSidePropsFunction: GetServerSideProps = async ({ req }) => {
  const queryClient = new QueryClient();
  const authError = req.cookies?.auth_error || null;

  // NOTE: Example code
  // await queryClient.prefetchQuery(queryKeys.main.list());

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      authError,
      seo: {
        nextSeoProps: {
          title: '로그인',
        },
      },
    },
  };
};

export const getServerSideProps = withAuthServerSideProps(
  getServerSidePropsFunction
);
