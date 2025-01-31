import { mergeQueryKeys } from '@lukemorales/query-key-factory';

import { mainKeys } from '@/features/api/queryKeys/mainKeys';
import { userKeys } from '@/features/api/queryKeys/userKeys';

const queryKeys = mergeQueryKeys(userKeys, mainKeys);

export default queryKeys;
