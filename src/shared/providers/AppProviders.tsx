import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

import JotaiProvider from '@/shared/providers/Jotai';
import ReactQueryProvider from '@/shared/providers/ReactQuery';
import { SessionStorageProvider } from '@/shared/providers/SessionStorageProvider';
import GlobalStyles from '@/shared/ui/GlobalStyles';

interface AppProvidersProps {
  session: Session;
  dehydratedState: unknown;
  children: React.ReactNode;
}

const AppProviders = ({
  session,
  dehydratedState,
  children,
}: AppProvidersProps) => (
  <JotaiProvider>
    <ReactQueryProvider dehydratedState={dehydratedState}>
      <SessionProvider session={session}>
        <SessionStorageProvider>
          <GlobalStyles>{children}</GlobalStyles>
        </SessionStorageProvider>
      </SessionProvider>
    </ReactQueryProvider>
  </JotaiProvider>
);

export default AppProviders;
