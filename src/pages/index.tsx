import { Button, Flex, Text } from '@radix-ui/themes';

const Home = () => {
  return (
    <>
      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes :)</Text>
        <Button>go</Button>
      </Flex>
    </>
  );
};

export default Home;
