import { dehydrate, QueryClient } from '@tanstack/react-query';
import type { GetServerSideProps } from 'next';

import { PAGE_TITLE } from '@/shared/constants/title';
import { withAuthServerSideProps } from '@/shared/hoc/withAuthServerSideProps';
import type { PageDefaultProps } from '@/shared/types/page-props';
import { LogScreen } from '@/shared/ui/LogScreen';
import SearchResultContainer from '@/views/search-result';

const SearchResult = ({ userId }: PageDefaultProps) => {
  return (
    <LogScreen params={{ title: PAGE_TITLE.SEARCH_RESULT }} userId={userId}>
      <SearchResultContainer />
    </LogScreen>
  );
};

export default SearchResult;

const getServerSidePropsFunction: GetServerSideProps = async ({ req }) => {
  const queryClient = new QueryClient();

  // NOTE: Example code
  // await queryClient.prefetchQuery(queryKeys.main.list());

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      seo: {
        nextSeoProps: {
          title: '검색결과',
        },
      },
    },
  };
};

export const getServerSideProps = withAuthServerSideProps(
  getServerSidePropsFunction
);
