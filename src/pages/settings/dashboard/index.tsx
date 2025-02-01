import { dehydrate, QueryClient } from '@tanstack/react-query';
import type { GetServerSideProps } from 'next';

import { PAGE_TITLE } from '@/shared/constants/title';
import { withAuthServerSideProps } from '@/shared/hoc/withAuthServerSideProps';
import { LogScreen } from '@/shared/ui/LogScreen';
import DashboardContainer from '@/views/settings-dashboard';

interface DashboardProps {
  userId?: string;
}

const DashboardPage = ({ userId }: DashboardProps) => {
  return (
    <LogScreen
      params={{ title: PAGE_TITLE.SETTINGS_DASHBOARD }}
      userId={userId}
    >
      <DashboardContainer />
    </LogScreen>
  );
};

export default DashboardPage;

const getServerSidePropsFunction: GetServerSideProps = async ({ req }) => {
  const queryClient = new QueryClient();

  // NOTE: Example code
  // await queryClient.prefetchQuery(queryKeys.main.list());

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export const getServerSideProps = withAuthServerSideProps(
  getServerSidePropsFunction
);
