import { Popover, Select } from '@radix-ui/themes';
import type * as React from 'react';
import { CiClock1 } from 'react-icons/ci';

import { cn } from '@/shared/lib/utils';
import Button from '@/shared/ui/Button';

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
          <Select.Root
            value={value?.split(':')[0] || ''}
            onValueChange={(hour) =>
              onChange && onChange(`${hour}:${value?.split(':')[1] || '00'}`)
            }
          >
            <Select.Trigger
              className="w-[80px] border rounded p-1 bg-accent text-left outline-0 shadow-none"
              placeholder="Hour"
            />
            <Select.Content color="gray">
              <Select.Group>
                <Select.Label>Hour</Select.Label>
                {hours.map((hour) => (
                  <Select.Item key={hour} value={hour} className="p-1">
                    {hour}
                  </Select.Item>
                ))}
              </Select.Group>
            </Select.Content>
          </Select.Root>

          {/* 분 선택 */}
          <Select.Root
            value={value?.split(':')[1] || ''}
            onValueChange={(minute) =>
              onChange && onChange(`${value?.split(':')[0] || '00'}:${minute}`)
            }
          >
            <Select.Trigger
              className="w-[80px] border rounded p-1 bg-accent text-left outline-0 shadow-none"
              placeholder="Minute"
            />
            <Select.Content color="gray">
              <Select.Group>
                <Select.Label>Minute</Select.Label>
                {minutes.map((minute) => (
                  <Select.Item key={minute} value={minute} className="p-1">
                    {minute}
                  </Select.Item>
                ))}
              </Select.Group>
            </Select.Content>
          </Select.Root>
        </div>
      </Popover.Content>
    </Popover.Root>
  );
};

export default TimePicker;
