import { useQuery } from '@tanstack/react-query';

import queryKeys from '@/api/queryKeys';

/**
 * ANCHOR: MAIN API fetch
 * @param
 * @returns
 */
export const useFetchMainSectionLocal = () => useQuery(queryKeys.main.list());
