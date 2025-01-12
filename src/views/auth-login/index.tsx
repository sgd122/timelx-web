import { Button, Flex, Text } from '@radix-ui/themes';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

import { LOGIN_PROVIDER } from '@/constants/auth';

const AuthLoginContainer = () => {
  const router = useRouter();

  useEffect(() => {
    const { message } = router.query;

    if (message === 'unauthorized') {
      toast.error('로그인이 필요합니다.');
    }
  }, [router.query]);

  return (
    <>
      <Text>Login Page</Text>
      <Flex direction="column" gap="2">
        <Button
          onClick={() => {
            signIn(LOGIN_PROVIDER['EMAIL'], {
              email: '11',
              password: '123',
            });
          }}
        >
          Login
        </Button>
      </Flex>
    </>
  );
};

export default AuthLoginContainer;
