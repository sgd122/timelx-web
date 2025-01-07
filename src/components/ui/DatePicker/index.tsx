import { Button, Popover } from '@radix-ui/themes';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import * as React from 'react';

import Calendar from '@/components/ui/Calendar';
import { cn } from '@/lib/utils';

interface DatePickerProps {
  value?: Date;
  onChange?: (date?: Date) => void;
  placeholder?: string;
  formatStr?: string;
}
export const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  placeholder = 'Pick a date',
  formatStr = 'PPP',
}) => {
  const [date, setDate] = React.useState<Date | undefined>(value);

  React.useEffect(() => {
    setDate(value);
  }, [value]);

  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button
          variant={'outline'}
          className={cn(
            'w-[240px] justify-start text-left font-normal',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon />
          {date ? format(date, formatStr) : <span>{placeholder}</span>}
        </Button>
      </Popover.Trigger>
      <Popover.Content className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(_date) => {
            setDate(_date);
            onChange && onChange(_date);
          }}
          initialFocus={true}
        />
      </Popover.Content>
    </Popover.Root>
  );
};

export default DatePicker;
