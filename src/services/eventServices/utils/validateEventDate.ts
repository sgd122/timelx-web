import type { UseFormSetValue } from 'react-hook-form';
import toast from 'react-hot-toast';

import type { FormValues } from '@/services/eventServices/types/form-values';

export const validateEventDate = (
  values: FormValues,
  setValue: UseFormSetValue<FormValues>
) => {
  const startDate = values['startDate'];
  const endDate = values['endDate'];

  if (startDate && endDate) {
    const toDate = (dateStr: string) => {
      return new Date(dateStr);
    };

    if (startDate && endDate) {
      if (toDate(endDate) < toDate(startDate)) {
        setValue('endDate', '');
        toast.error('종료 날짜가 시작 날짜보다 이전일 수 없습니다.');
      }
    }
  }
};
