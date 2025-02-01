import { dehydrate, QueryClient } from '@tanstack/react-query';
import type { GetServerSideProps } from 'next';

import queryKeys from '@/features/api/queryKeys';
import { PAGE_TITLE } from '@/shared/constants/title';
import { withAuthServerSideProps } from '@/shared/hoc/withAuthServerSideProps';
import { LogScreen } from '@/shared/ui/LogScreen';
import HomeContainer from '@/views/home';

const Home = () => {
  return (
    <LogScreen params={{ title: PAGE_TITLE.HOME }}>
      <HomeContainer />
    </LogScreen>
  );
};

export default Home;

const getServerSidePropsFunction: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  // NOTE: Example code
  // await queryClient.prefetchQuery({
  //   queryKey: ['fetchMainSectionLocal'],
  //   queryFn: () => fetchMainSectionLocal(req),
  // });
  await queryClient.prefetchQuery(queryKeys.main.list());

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export const getServerSideProps = withAuthServerSideProps(
  getServerSidePropsFunction
);
