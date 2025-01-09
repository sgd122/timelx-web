import { Button, Popover } from '@radix-ui/themes';
import type * as React from 'react';
import { CiClock1 } from 'react-icons/ci';

import { cn } from '@/lib/utils';

interface TimePickerProps {
  value: string | undefined; // HH:mm 형식
  onChange: (time?: string) => void;
  placeholder?: string;
}

/**
 * TimePicker 컴포넌트
 *
 * 사용자가 시간을 선택할 수 있는 컴포넌트입니다.
 *
 * ---
 * 📋 **Props**:
 * - `value` (선택): 현재 선택된 시간(HH:mm 형식). 제공되면 제어 컴포넌트로 동작합니다.
 * - `onChange` (선택): 사용자가 시간을 선택했을 때 호출되는 콜백 함수입니다.
 * - `placeholder` (선택): 시간이 선택되지 않았을 때 표시되는 플레이스홀더 텍스트입니다.
 *
 * ---
 * 💡 **사용 예제**:
 * ```tsx
 * <TimePicker
 *   placeholder="시간을 선택하세요"
 *   value={selectedTime}
 *   onChange={(time) => setSelectedTime(time)}
 * />
 * ```
 */
export const TimePicker: React.FC<TimePickerProps> = ({
  value,
  onChange,
  placeholder = 'Pick a time',
}) => {
  const hours = Array.from({ length: 24 }, (_, i) =>
    String(i).padStart(2, '0')
  );
  const minutes = Array.from({ length: 60 }, (_, i) =>
    String(i).padStart(2, '0')
  );

  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button
          variant={'soft'}
          color="gray"
          className={cn(
            'w-[240px] justify-start text-left font-normal',
            !value && 'text-muted-foreground'
          )}
        >
          <CiClock1 size="24" />
          {value ? <span>{value}</span> : <span>{placeholder}</span>}
        </Button>
      </Popover.Trigger>
      <Popover.Content className="w-auto p-0" align="start">
        <div className="flex p-2 gap-2 bg-accent">
          {/* 시간 선택 */}
          <select
            className="border rounded p-1 bg-accent outline-0"
            onChange={(e) =>
              onChange &&
              onChange(`${e.target.value}:${value?.split(':')[1] || '00'}`)
            }
            value={value?.split(':')[0] || ''}
          >
            <option value="" disabled={true}>
              Hour
            </option>
            {hours.map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>
          {/* 분 선택 */}
          <select
            className="border rounded p-1 bg-accent outline-0"
            onChange={(e) =>
              onChange &&
              onChange(`${value?.split(':')[0] || '00'}:${e.target.value}`)
            }
            value={value?.split(':')[1] || ''}
          >
            <option value="" disabled={true}>
              Minute
            </option>
            {minutes.map((minute) => (
              <option key={minute} value={minute}>
                {minute}
              </option>
            ))}
          </select>
        </div>
      </Popover.Content>
    </Popover.Root>
  );
};

export default TimePicker;
