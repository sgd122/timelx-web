import type * as z from 'zod';

import type { schema } from '@/views/event-new/constants/schema';

export type FormValues = z.infer<typeof schema>;
