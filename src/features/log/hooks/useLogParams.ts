import { useContext } from 'react';

import { LogParamsContext } from '@/features/log/providers/LogParamsProvider';

export function useLogParams() {
  return useContext(LogParamsContext);
}
