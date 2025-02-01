import { dehydrate, QueryClient } from '@tanstack/react-query';
import type { GetServerSideProps } from 'next';

import { PAGE_TITLE } from '@/shared/constants/title';
import { withAuthServerSideProps } from '@/shared/hoc/withAuthServerSideProps';
import { LogScreen } from '@/shared/ui/LogScreen';
import AccountContainer from '@/views/settings-account';

interface AccountPageProps {
  userId?: string;
}

const AccountPage = ({ userId }: AccountPageProps) => {
  return (
    <LogScreen params={{ title: PAGE_TITLE.SETTINGS_ACCOUNT }} userId={userId}>
      <AccountContainer />
    </LogScreen>
  );
};

export default AccountPage;

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
