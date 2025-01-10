import { Button, Flex, Text } from '@radix-ui/themes';
import { signIn, signOut, useSession } from 'next-auth/react';

import { LOGIN_PROVIDER } from '@/constants/auth';

const SettingContainer = () => {
  const session = useSession();

  return (
    <>
      <Text>Settings Page</Text>
      <Flex direction="column" gap="2">
        {session.status === 'authenticated' &&
          JSON.stringify(session.data?.user)}
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
        <Button
          onClick={() => {
            signOut();
          }}
        >
          Logout
        </Button>
      </Flex>
    </>
  );
};

export default SettingContainer;
