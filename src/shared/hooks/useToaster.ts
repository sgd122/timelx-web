import { useMemo } from 'react';
import toast from 'react-hot-toast';

import { useLogger } from '@/shared/hooks/useLogger';
import type { LogParameters } from '@/shared/types/log';

interface LogParams {
  logParams?: LogParameters;
}

export function useToaster() {
  const logger = useLogger();

  return useMemo(() => {
    return {
      success: (
        message: Parameters<typeof toast.success>[0],
        options?: Parameters<typeof toast.success>[1] & LogParams
      ) => {
        logger.popup({
          component: 'toast.success',
          params: { popupMessage: message, ...options?.logParams },
        });

        return toast.success(message, options);
      },
      error: (
        message: Parameters<typeof toast.error>[0],
        options?: Parameters<typeof toast.error>[1] & LogParams
      ) => {
        logger.popup({
          component: 'toast.error',
          params: { popupMessage: message, ...options?.logParams },
        });

        return toast.error(message, options);
      },
      custom: (
        message: Parameters<typeof toast.custom>[0],
        options?: Parameters<typeof toast.custom>[1] & LogParams
      ) => {
        logger.popup({
          component: 'toast.custom',
          params: { popupMessage: message, ...options?.logParams },
        });

        return toast.custom(message, options);
      },
    };
  }, [logger, toast]);
}
