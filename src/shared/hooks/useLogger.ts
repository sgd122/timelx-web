import { logEvent } from '@/app/utils/firebase';
import { useLogParams } from '@/shared/hooks/useLogParams';
import type { LogParameters } from '@/shared/types/log';

interface LoggerParams {
  params: LogParameters;
  component?: string;
}

export const useLogger = () => {
  const parentParams = useLogParams();

  const log = ({ params }: LoggerParams) => {
    logEvent(`log`, {
      ...params,
      ...parentParams,
    });
  };

  const screen = ({ params }: LoggerParams) => {
    logEvent(`screen`, {
      ...params,
      ...parentParams,
    });
  };

  const click = ({ params }: LoggerParams) => {
    logEvent(`click`, {
      ...params,
      ...parentParams,
    });
  };

  const popup = ({ params, component }: LoggerParams) => {
    logEvent(`popup`, {
      ...params,
      ...parentParams,
    });
  };

  return { log, screen, click, popup };
};
