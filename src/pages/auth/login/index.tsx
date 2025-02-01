import type { GetServerSideProps } from 'next';

import { PAGE_TITLE } from '@/shared/constants/title';
import { LogScreen } from '@/shared/ui/LogScreen';
import AuthLoginContainer from '@/views/auth-login';

const AuthLoginPage = ({ authError }: { authError?: string }) => {
  return (
    <LogScreen params={{ title: PAGE_TITLE.AUTH_LOGIN }}>
      <AuthLoginContainer authError={authError} />
    </LogScreen>
  );
};

export default AuthLoginPage;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const authError = req.cookies?.auth_error || null;

  return {
    props: { authError },
  };
};
