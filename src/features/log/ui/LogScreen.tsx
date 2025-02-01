import { useRouter } from 'next/router';
import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';

import { useLogger } from '@/features/log/hooks/useLogger';
import { LogParamsProvider } from '@/features/log/providers/LogParamsProvider';
import type { LogParameters } from '@/features/log/types/log';

interface LogScreenProps {
  params: LogParameters;
}
export const LogScreen = ({
  children,
  params,
}: PropsWithChildren<LogScreenProps>) => {
  const router = useRouter();
  const logger = useLogger();

  useEffect(() => {
    if (router.isReady) {
      logger.screen({ params });
    }
  }, [router.isReady]);

  return <LogParamsProvider params={params}>{children}</LogParamsProvider>;
};
