import type * as z from 'zod';

import type { schema } from '@/services/eventService/constants/schema';

export type FormValues = z.infer<typeof schema>;
