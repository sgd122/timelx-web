import { dehydrate, QueryClient } from '@tanstack/react-query';
import type { GetServerSideProps } from 'next';

import HomeContainer from '@/views/home';

const Home = () => {
  return <HomeContainer />;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const queryClient = new QueryClient();

  // NOTE: Example code
  // await queryClient.prefetchQuery({
  //   queryKey: ['fetchMainSectionLocal'],
  //   queryFn: () => fetchMainSectionLocal(req),
  // });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};
