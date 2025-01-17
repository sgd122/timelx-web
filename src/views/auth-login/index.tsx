import { Flex, Text } from '@radix-ui/themes';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';

import Button from '@/components/ui/Button';
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
    <Flex
      className="text-white"
      justify="center"
      align="center"
      direction="column"
      gap="8"
    >
      {/* Logo */}
      <Text size="8" weight="bold" className="flex items-center gap-1 mt-6">
        시간상점
        <span className="text-yellow-500">.</span>
      </Text>

      {/* Login Button */}
      <Button
        size="4"
        className="w-full bg-white text-black hover:bg-gray-100"
        onClick={() =>
          signIn(LOGIN_PROVIDER['EMAIL'], {
            email: '11',
            password: '123',
          })
        }
      >
        <FcGoogle size="20" />
        Google로 계속하기
      </Button>
    </Flex>
  );
};

export default AuthLoginContainer;
