import type { UseFormSetValue } from 'react-hook-form';

import type { FormValues } from '@/features/event/types/form-values';
import type { useToaster } from '@/shared/hooks/useToaster';

export const validateEventDate = (
  values: FormValues,
  setValue: UseFormSetValue<FormValues>,
  toaster: ReturnType<typeof useToaster>
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
        toaster.error('종료 날짜가 시작 날짜보다 이전일 수 없습니다.');
      }
    }
  }
};
