import { dehydrate, QueryClient } from '@tanstack/react-query';
import type { GetServerSideProps } from 'next';

import { PAGE_TITLE } from '@/shared/constants/title';
import { withAuthServerSideProps } from '@/shared/hoc/withAuthServerSideProps';
import { LogScreen } from '@/shared/ui/LogScreen';
import ContactContainer from '@/views/settings-contact';

interface ContactProps {
  userId?: string;
}

const Contact = ({ userId }: ContactProps) => {
  return (
    <LogScreen params={{ title: PAGE_TITLE.SETTINGS_CONTACT }} userId={userId}>
      <ContactContainer />
    </LogScreen>
  );
};

export default Contact;

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
