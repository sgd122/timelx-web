import { mergeQueryKeys } from '@lukemorales/query-key-factory';

import { mainKeys } from '@/api/queryKeys/mainKeys';
import { userKeys } from '@/api/queryKeys/userKeys';

const queryKeys = mergeQueryKeys(userKeys, mainKeys);

export default queryKeys;
