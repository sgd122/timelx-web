import { Button, Flex, Text } from '@radix-ui/themes';
import { signOut, useSession } from 'next-auth/react';

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
