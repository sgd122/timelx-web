import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';

import GlobalStyles from '@/components/GlobalStyles';
import JotaiProvider from '@/components/providers/Jotai';
import ReactQueryProvider from '@/components/providers/ReactQuery';
import Seo from '@/components/Seo';
import Layout from '@/layout';

const Toaster = dynamic(
  () => import('@/components/Toaster').then((c) => c.Toaster),
  {
    ssr: false,
  }
);

const ExternalScript = dynamic(() => import('@/components/ExternalScript'), {
  ssr: false,
});

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  const { seo, dehydratedState } = pageProps;
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
            <GlobalStyles>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </GlobalStyles>
          </SessionProvider>
        </ReactQueryProvider>
      </JotaiProvider>
    </>
  );
};

export default App;
