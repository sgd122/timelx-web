import { useRouter } from 'next/router';
import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';

import { useLogger } from '@/shared/hooks/useLogger';
import { LogParamsProvider } from '@/shared/providers/LogParamsProvider';
import type { LogParameters } from '@/shared/types/log';

interface LogScreenProps {
  params?: LogParameters;
  userId?: string;
}
export const LogScreen = ({
  children,
  params,
  userId,
}: PropsWithChildren<LogScreenProps>) => {
  const router = useRouter();
  const logger = useLogger();
  const _params = userId ? { ...params, userId } : (params as LogParameters);

  useEffect(() => {
    if (params && router.isReady) {
      logger.screen({ params: _params });
    }
  }, [router.isReady]);

  return (
    <LogParamsProvider params={_params ?? null}>{children}</LogParamsProvider>
  );
};
