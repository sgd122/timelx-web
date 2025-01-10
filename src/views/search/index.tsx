import { Button, Flex, Text } from '@radix-ui/themes';
import Link from 'next/link';

const SearchContainer = () => {
  return (
    <>
      <Flex direction="column" gap="2">
        <Text>Search Page :)</Text>
        <Link href="/search/result">
          <Button>go search result</Button>
        </Link>
      </Flex>
    </>
  );
};

export default SearchContainer;
