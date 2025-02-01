import { useRouter } from 'next/router';
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
  const logger = useLogger();

  useEffect(() => {
    if (router.isReady) {
      logger.screen({ params });
    }
  }, [router.isReady]);

  return <LogParamsProvider params={params}>{children}</LogParamsProvider>;
};
