import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { schema } from '@/views/event-new/constants/schema';
import type { FormValues } from '@/views/event-new/types/form-values';

export const useEventForm = () => {
  const { register, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: {
      title: '',
      startDate: undefined,
      endDate: undefined,
      startTime: undefined,
      endTime: undefined,
      venue: '',
      address: '',
      information: '',
      organizer: '',
      sponsor: undefined,
      tags: undefined,
    },
    resolver: zodResolver(schema),
  });

  return {
    register,
    handleSubmit,
    formState,
  };
};
