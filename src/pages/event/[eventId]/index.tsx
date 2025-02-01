import { dehydrate, QueryClient } from '@tanstack/react-query';
import type { GetServerSideProps } from 'next';

import { PAGE_TITLE } from '@/shared/constants/title';
import { withAuthServerSideProps } from '@/shared/hoc/withAuthServerSideProps';
import { LogScreen } from '@/shared/ui/LogScreen';
import EventContainer from '@/views/event';

interface EventPageProps {
  userId?: string;
}

const EventPage = ({ userId }: EventPageProps) => {
  return (
    <LogScreen params={{ title: PAGE_TITLE.EVENT }} userId={userId}>
      <EventContainer />
    </LogScreen>
  );
};

export default EventPage;

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
