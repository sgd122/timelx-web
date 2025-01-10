import { Button, Flex, Text } from '@radix-ui/themes';
import Link from 'next/link';

const SearchResultContainer = () => {
  return (
    <>
      <Flex direction="column" gap="2">
        <Text>Search Result Page :)</Text>
        <Link href="/">
          <Button>go home</Button>
        </Link>
      </Flex>
    </>
  );
};

export default SearchResultContainer;
