import type * as z from 'zod';

import type { schema } from '@/services/eventServices/constants/schema';

export type FormValues = z.infer<typeof schema>;
