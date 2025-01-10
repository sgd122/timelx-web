import { Button, Flex, Text } from '@radix-ui/themes';
import Link from 'next/link';

const EventContainer = () => {
  return (
    <Flex direction="column" gap="2">
      <Text>Event Page :)</Text>
      <Link href="/">
        <Button>go home</Button>
      </Link>
    </Flex>
  );
};

export default EventContainer;
