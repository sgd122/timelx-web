import { dehydrate, QueryClient } from '@tanstack/react-query';
import type { GetServerSideProps } from 'next';

import { PAGE_TITLE } from '@/shared/constants/title';
import { withAuthServerSideProps } from '@/shared/hoc/withAuthServerSideProps';
import type { PageDefaultProps } from '@/shared/types/page-props';
import { LogScreen } from '@/shared/ui/LogScreen';
import SettingContainer from '@/views/settings';

const Settings = ({ userId }: PageDefaultProps) => {
  return (
    <LogScreen params={{ title: PAGE_TITLE.SETTINGS }} userId={userId}>
      <SettingContainer />
    </LogScreen>
  );
};

export default Settings;

const getServerSidePropsFunction: GetServerSideProps = async ({ req }) => {
  const queryClient = new QueryClient();

  // NOTE: Example code
  // await queryClient.prefetchQuery(queryKeys.main.list());

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      seo: {
        nextSeoProps: {
          title: 'Profile',
        },
      },
    },
  };
};

export const getServerSideProps = withAuthServerSideProps(
  getServerSidePropsFunction
);
