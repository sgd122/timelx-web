import type * as z from 'zod';

import type { schema } from '@/features/event/constants/schema';

export type FormValues = z.infer<typeof schema>;
