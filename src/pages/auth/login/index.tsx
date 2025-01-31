import type { GetServerSideProps } from 'next';

import AuthLoginContainer from '@/views/auth-login';

const AuthLoginPage = ({ authError }: { authError?: string }) => {
  return <AuthLoginContainer authError={authError} />;
};

export default AuthLoginPage;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const authError = req.cookies?.auth_error || null;

  return {
    props: { authError },
  };
};
