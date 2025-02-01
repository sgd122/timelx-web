import type { UseFormSetValue } from 'react-hook-form';

import type { FormValues } from '@/features/event/types/form-values';
import type { useToaster } from '@/shared/hooks/useToaster';

export const validateEventTime = (
  values: FormValues,
  setValue: UseFormSetValue<FormValues>,
  toaster: ReturnType<typeof useToaster>
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
      toaster.error('종료 시간이 시작 시간보다 이전일 수 없습니다.');
    }
  }
};
