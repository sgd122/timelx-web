import type { ReactNode } from 'react';
import { createContext } from 'react';

import type { LogParameters } from '@/shared/types/log';

interface Props {
  children: ReactNode;
  params: LogParameters | null;
}

export const LogParamsContext = createContext<LogParameters | null>(null);

export const LogParamsProvider = ({ children, params }: Props) => {
  return (
    <LogParamsContext.Provider value={params}>
      {children}
    </LogParamsContext.Provider>
  );
};
