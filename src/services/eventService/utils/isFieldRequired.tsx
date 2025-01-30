import * as z from 'zod';

export const isFieldRequired = (field: z.ZodTypeAny): boolean => {
  return !(field.isOptional() || field instanceof z.ZodDefault);
};
