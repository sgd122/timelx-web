import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { schema } from '@/views/event-edit/constants/schema';
import type { FormValues } from '@/views/event-edit/types/form-values';

export const useEventForm = (initialValues: FormValues) => {
  const { register, handleSubmit, formState, getValues } = useForm<FormValues>({
    defaultValues: {
      title: initialValues.title,
      startDate: initialValues.startDate,
      endDate: initialValues.endDate,
      startTime: initialValues.startTime,
      endTime: initialValues.endTime,
      venue: initialValues.venue,
      address: initialValues.address,
      information: initialValues.information,
      organizer: initialValues.organizer,
      sponsor: initialValues.sponsor,
      tags: initialValues.tags,
      image: initialValues.image,
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
