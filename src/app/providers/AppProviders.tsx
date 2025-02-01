import type { SeoProps } from '@seo';
import dynamic from 'next/dynamic';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type React from 'react';

import GlobalStyles from '@/app/ui/GlobalStyles';
import Seo from '@/app/ui/Seo';
import JotaiProvider from '@/shared/providers/Jotai';
import ReactQueryProvider from '@/shared/providers/ReactQuery';
import { SessionStorageProvider } from '@/shared/providers/SessionStorageProvider';

import '@/shared/assets/styles/globals.css';

const Toaster = dynamic(
  () => import('@/shared/ui/Toaster').then((c) => c.Toaster),
  {
    ssr: false,
  }
);

interface AppProvidersProps {
  session: Session;
  dehydratedState: unknown;
  seo: SeoProps;
  children: React.ReactNode;
}

const AppProviders = ({
  session,
  dehydratedState,
  seo,
  children,
}: AppProvidersProps) => (
  <>
    <Seo seo={seo} />
    <Toaster />
    <JotaiProvider>
      <ReactQueryProvider dehydratedState={dehydratedState}>
        <SessionProvider session={session}>
          <SessionStorageProvider>
            <GlobalStyles>{children}</GlobalStyles>
          </SessionStorageProvider>
        </SessionProvider>
      </ReactQueryProvider>
    </JotaiProvider>
  </>
);

export default AppProviders;
