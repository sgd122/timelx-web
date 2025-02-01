import { useLogParams } from '@/shared/hooks/useLogParams';
import type { LogParameters } from '@/shared/types/log';

interface LoggerParams {
  params: LogParameters;
  component?: string;
}

export const useLogger = () => {
  const parentParams = useLogParams();

  const log = ({ params }: LoggerParams) => {
    console.log('log::', params, parentParams);
    // logClient.request({ params: { ...parentParams, ...params });
  };

  const screen = ({ params }: LoggerParams) => {
    console.log('screen::', params, parentParams);
  };

  const click = ({ params }: LoggerParams) => {
    console.log('click::', params, parentParams);
  };

  const popup = ({ params, component }: LoggerParams) => {
    console.log('popup::', params, parentParams, component);
  };

  return { log, screen, click, popup };
};
