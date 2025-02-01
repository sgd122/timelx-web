import { useContext } from 'react';

import { LogParamsContext } from '@/shared/providers/LogParamsProvider';

export function useLogParams() {
  return useContext(LogParamsContext);
}
