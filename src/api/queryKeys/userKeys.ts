import { createQueryKeys } from '@lukemorales/query-key-factory';

export const userKeys = createQueryKeys('user', {
  list: null,
  detail: (userId: number) => [userId],
});
