import { Popover } from '@radix-ui/themes';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import type * as React from 'react';
import { CiCalendar } from 'react-icons/ci';

import { cn } from '@/shared/lib/utils';
import Button from '@/shared/ui/Button';
import Calendar from '@/shared/ui/Calendar';

interface DatePickerProps {
  value: Date | undefined;
  onChange: (date?: Date) => void;
  placeholder?: string;
  formatStr?: string;
}

/**
 * DatePicker 컴포넌트
 *
 * 사용자가 날짜를 선택할 수 있는 커스터마이징 가능한 컴포넌트입니다.
 *
 * ---
 * 🌟 **주요 기능**:
 * - 캘린더 팝오버를 통해 날짜 선택 가능
 * - 선택한 날짜를 지정된 형식(format)으로 표시
 * - 날짜가 선택되지 않은 경우 플레이스홀더 텍스트 표시
 *
 * ---
 * 📋 **Props**:
 * - `value` (선택): 현재 선택된 날짜. 제공될 경우 컴포넌트는 제어 컴포넌트로 동작합니다.
 * - `onChange` (선택): 사용자가 날짜를 선택했을 때 호출되는 콜백 함수입니다.
 * - `placeholder` (선택): 날짜가 선택되지 않았을 때 표시되는 플레이스홀더 텍스트입니다.
 * - `formatStr` (선택): 선택한 날짜를 표시할 때 사용할 date-fns 형식 문자열입니다.
 *
 * ---
 * 💡 **사용 예제**:
 * ```tsx
 * <DatePicker
 *   placeholder="날짜를 선택하세요"
 *   formatStr="PPP"
 *   value={selectedDate}
 *   onChange={(date) => setSelectedDate(date)}
 * />
 * ```
 *
 * ---
 * 🔗 **관련 컴포넌트**:
 * - `Calendar`: 날짜 선택 UI를 렌더링하는 핵심 컴포넌트입니다.
 * - `Popover`: 캘린더 드롭다운을 감싸는 래퍼 컴포넌트입니다.
 */
export const DatePicker: React.FC<DatePickerProps> = ({
  value = new Date(),
  onChange,
  placeholder = 'Pick a date',
  formatStr = 'PPP',
}) => {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button
          variant={'outline'}
          className={cn(
            'w-[240px] justify-start text-left font-normal',
            !value && 'text-muted-foreground'
          )}
        >
          <CiCalendar size="24" />
          {value ? (
            format(value, formatStr, { locale: ko })
          ) : (
            <span>{placeholder}</span>
          )}
        </Button>
      </Popover.Trigger>
      <Popover.Content className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={value}
          onSelect={onChange}
          initialFocus={true}
        />
      </Popover.Content>
    </Popover.Root>
  );
};

export default DatePicker;
