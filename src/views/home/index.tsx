import { Button, Flex, Text } from '@radix-ui/themes';
import Link from 'next/link';

const HomeContainer = () => {
  return (
    <>
      <Flex direction="column" gap="2">
        <Text>Home Page :)</Text>
        <Link href="/search">
          <Button>go search</Button>
        </Link>
      </Flex>
    </>
  );
};

export default HomeContainer;
