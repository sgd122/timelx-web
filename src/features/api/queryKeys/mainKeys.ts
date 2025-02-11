import { createQueryKeys } from '@lukemorales/query-key-factory';

import { fetchMainSectionLocal } from '@/features/api/domains/main';

export const mainKeys = createQueryKeys('main', {
  list: () => ({
    queryKey: ['mainSections'],
    queryFn: async () => await fetchMainSectionLocal(),
  }),
});
