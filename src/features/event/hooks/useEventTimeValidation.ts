import { useEffect } from 'react';
import type { UseFormSetValue, UseFormWatch } from 'react-hook-form';

import type { FormValues } from '@/features/event/types/form-values';
import { validateEventDate } from '@/features/event/validations/validateEventDate';
import { validateEventTime } from '@/features/event/validations/validateEventTime';

interface UseEventTimeValidationProps {
  watch: UseFormWatch<FormValues>;
  setValue: UseFormSetValue<FormValues>;
}

/**
 * `useEventTimeValidation` 커스텀 훅
 *
 * 이벤트 폼에서 시작 시간(`startTime`)과 종료 시간(`endTime`)의 유효성을 검사합니다.
 * 종료 시간이 시작 시간보다 이전일 경우 경고 메시지를 표시하고, 종료 시간을 초기화합니다.
 *
 * ---
 * 🌟 **주요 기능**:
 * - `startTime`과 `endTime`을 실시간으로 모니터링.
 * - `endTime`이 `startTime`보다 이전이면 자동으로 초기화.
 * - 유효하지 않은 시간 입력 시 사용자에게 토스트 메시지 제공.
 *
 * ---
 * 📋 **Props**:
 * - `watch` (필수): 폼 필드의 현재 상태를 감시하는 `react-hook-form`의 watch 함수.
 * - `setValue` (필수): 필드 값을 업데이트하는 `react-hook-form`의 setValue 함수.
 *
 * ---
 * 💡 **사용 예제**:
 * ```tsx
 * import { useForm } from 'react-hook-form';
 * import { useEventTimeValidation } from '@/services/event/hooks/useEventTimeValidation';
 *
 * const { watch, setValue } = useForm<FormValues>();
 *
 * useEventTimeValidation({ watch, setValue });
 * ```
 */
export const useEventTimeValidation = ({
  watch,
  setValue,
}: UseEventTimeValidationProps) => {
  useEffect(() => {
    const subscription = watch((values) => {
      validateEventTime(values as FormValues, setValue);
      validateEventDate(values as FormValues, setValue);
    });

    return () => subscription.unsubscribe();
  }, [watch, setValue]);
};
