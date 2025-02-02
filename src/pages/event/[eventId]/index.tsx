import { dehydrate, QueryClient } from '@tanstack/react-query';
import type { GetServerSideProps } from 'next';

import { PAGE_TITLE } from '@/shared/constants/title';
import { withAuthServerSideProps } from '@/shared/hoc/withAuthServerSideProps';
import type { PageDefaultProps } from '@/shared/types/page-props';
import { LogScreen } from '@/shared/ui/LogScreen';
import EventContainer from '@/views/event';

const EventPage = ({ userId }: PageDefaultProps) => {
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
  // const { hotel } = queryClient.getQueryData(queryKeys.main.list().queryKey) as Hotel;

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      seo: {
        nextSeoProps: {
          title: '이벤트 상세',
        },
      },
    },
  };
};

export const getServerSideProps = withAuthServerSideProps(
  getServerSidePropsFunction
);
