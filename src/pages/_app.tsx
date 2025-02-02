import type { AppProps } from 'next/app';
import Head from 'next/head';

import useFirebase from '@/app/hooks/useFirebase';
import AppProviders from '@/app/providers/AppProviders';
import Layout from '@/layout';

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  const { seo, dehydratedState } = pageProps;

  // FIXME: 여전히 msw에러 발생
  // useMocks();
  useFirebase();

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
        />
      </Head>
      <AppProviders
        session={session}
        dehydratedState={dehydratedState}
        seo={seo}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProviders>
    </>
  );
};

export default App;
