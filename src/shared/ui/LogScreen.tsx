import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';

import { useLogger } from '@/shared/hooks/useLogger';
import { LogParamsProvider } from '@/shared/providers/LogParamsProvider';
import type { LogParameters } from '@/shared/types/log';

interface LogScreenProps {
  params: LogParameters;
}
export const LogScreen = ({
  children,
  params,
}: PropsWithChildren<LogScreenProps>) => {
  const router = useRouter();
  const session = useSession();
  const logger = useLogger();

  useEffect(() => {
    if (router.isReady && session.status !== 'loading') {
      const userId = session.data?.user?.id;
      session.status === 'authenticated'
        ? logger.screen({ params: { ...params, userId } })
        : logger.screen({ params });
    }
  }, [router.isReady, session]);

  return <LogParamsProvider params={params}>{children}</LogParamsProvider>;
};
