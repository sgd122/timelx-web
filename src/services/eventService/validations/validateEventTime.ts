import type { UseFormSetValue } from 'react-hook-form';
import toast from 'react-hot-toast';

import type { FormValues } from '@/services/eventService/types/form-values';

export const validateEventTime = (
  values: FormValues,
  setValue: UseFormSetValue<FormValues>
) => {
  const startTime = values['startTime'];
  const endTime = values['endTime'];

  if (startTime && endTime) {
    // HH:mm → 분 단위로 변환하여 비교
    const toMinutes = (time: string) => {
      const [hours, minutes] = time.split(':').map(Number);
      return hours * 60 + minutes;
    };

    if (toMinutes(endTime) < toMinutes(startTime)) {
      setValue('endTime', undefined);
      toast.error('종료 시간이 시작 시간보다 이전일 수 없습니다.');
    }
  }
};
