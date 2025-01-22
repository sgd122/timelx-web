import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { schema } from '@/services/eventServices/constants/schema';
import type { FormValues } from '@/services/eventServices/types/form-values';

export const useEventForm = (initialValues?: FormValues) => {
  const { register, handleSubmit, formState, getValues } = useForm<FormValues>({
    defaultValues: {
      title: initialValues?.title ?? '',
      startDate: initialValues?.startDate ?? undefined,
      endDate: initialValues?.endDate ?? undefined,
      startTime: initialValues?.startTime ?? undefined,
      endTime: initialValues?.endTime ?? undefined,
      venue: initialValues?.venue ?? '',
      address: initialValues?.address ?? '',
      information: initialValues?.information ?? '',
      organizer: initialValues?.organizer ?? '',
      urlName: initialValues?.urlName ?? undefined,
      urlLink: initialValues?.urlLink ?? undefined,
      tags: initialValues?.tags ?? undefined,
    },
    resolver: zodResolver(schema),
  });

  return {
    register,
    handleSubmit,
    formState,
    getValues,
  };
};
