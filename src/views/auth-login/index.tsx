import { Flex, Text } from '@radix-ui/themes';
import { signIn } from 'next-auth/react';
import { useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';

import { LOGIN_PROVIDER } from '@/shared/constants/auth';
import { useToaster } from '@/shared/hooks/useToaster';
import Button from '@/shared/ui/Button';

const AuthLoginContainer = ({ authError }: { authError?: string }) => {
  const toaster = useToaster();
  useEffect(() => {
    if (authError === 'unauthorized') {
      toaster.error('로그인이 필요합니다.');
    }
  }, []);

  return (
    <Flex
      className="text-white"
      justify="center"
      align="center"
      direction="column"
      gap="8"
    >
      <h2 className="sr-only">로그인</h2>
      {/* Logo */}
      <Text size="8" weight="bold" className="flex items-center gap-1 mt-6">
        시간상점
        <span className="text-yellow-500">.</span>
      </Text>

      {/* Login Button */}
      <Button
        size="4"
        className="w-full bg-white text-black hover:bg-gray-100"
        onClick={() => signIn(LOGIN_PROVIDER['GOOGLE'])}
      >
        <FcGoogle size="20" />
        <h3>Google로 계속하기</h3>
      </Button>
      <Button
        size="4"
        className="w-full bg-white text-black hover:bg-gray-100"
        onClick={() =>
          signIn(LOGIN_PROVIDER['EMAIL'], {
            email: '11',
            password: '123456',
          })
        }
      >
        <FcGoogle size="20" />
        <h3>Google로 계속하기(text접속)</h3>
      </Button>
    </Flex>
  );
};

export default AuthLoginContainer;
