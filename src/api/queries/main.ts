import { useQuery } from '@tanstack/react-query';

import { fetchMainSectionLocal } from '@/api/domains/main';

/**
 * ANCHOR: MAIN API fetch
 * @param
 * @returns
 */
export const useFetchMainSectionLocal = (locale: string | undefined) =>
  useQuery({
    queryKey: ['fetchMainSectionLocal'],
    queryFn: () => fetchMainSectionLocal(),
  });
