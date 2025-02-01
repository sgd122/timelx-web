import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';

import useFirebase from '@/app/hooks/useFirebase';
import Layout from '@/layout';
import JotaiProvider from '@/shared/providers/Jotai';
import ReactQueryProvider from '@/shared/providers/ReactQuery';
import { SessionStorageProvider } from '@/shared/providers/SessionStorageProvider';
import GlobalStyles from '@/shared/ui/GlobalStyles';
import Seo from '@/shared/ui/Seo';

import '@/shared/assets/styles/globals.css';

const Toaster = dynamic(
  () => import('@/shared/ui/Toaster').then((c) => c.Toaster),
  {
    ssr: false,
  }
);

const ExternalScript = dynamic(() => import('@/app/scripts'), {
  ssr: false,
});

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
          content="initial-scale=1.0,user-scalable=no,maximum-scale=1,minimum-scale=1,width=device-width,viewport-fit=cover"
        />
      </Head>
      <ExternalScript />
      <Seo seo={seo} />
      <Toaster />
      <JotaiProvider>
        <ReactQueryProvider dehydratedState={dehydratedState}>
          <SessionProvider session={session}>
            <SessionStorageProvider>
              <GlobalStyles>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </GlobalStyles>
            </SessionStorageProvider>
          </SessionProvider>
        </ReactQueryProvider>
      </JotaiProvider>
    </>
  );
};

export default App;
