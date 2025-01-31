import type { ChangeEvent, KeyboardEvent } from 'react';
import { useState } from 'react';

import { cn } from '@/shared/lib/utils';
import ChipList from '@/shared/ui/ChipList';

interface ChipListInputProps {
  placeholder?: string;
  maxChips?: number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  chipClassName?: string;
  wrapperClassName?: string;
}

const ChipListInput = ({
  placeholder,
  maxChips = Infinity,
  onChange,
  className,
  chipClassName,
  wrapperClassName,
}: ChipListInputProps) => {
  const [value, setValue] = useState('');
  const [chips, setChips] = useState<string[]>([]);

  const addChip = (newValue: string) => {
    if (!newValue.trim()) return;
    if (chips.length >= maxChips) return;

    const newChips = [...chips, newValue.trim()];
    setChips(newChips);
    setValue('');
    // Trigger `onChange` with updated chips as a string
    const syntheticEvent = {
      target: { value: newChips.join(', ') },
    } as ChangeEvent<HTMLInputElement>;
    onChange?.(syntheticEvent);
  };

  const removeChip = (index: number) => {
    const newChips = chips.filter((_, i) => i !== index);
    setChips(newChips);
    // Trigger `onChange` with updated chips as a string
    const syntheticEvent = {
      target: { value: newChips.join(', ') },
    } as ChangeEvent<HTMLInputElement>;
    onChange?.(syntheticEvent);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addChip(value);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange?.(e); // Forward input changes to the parent
  };

  return (
    <div className={cn('relative w-full text-sm', className)}>
      <div
        className={cn(
          'w-full min-h-[57px]',
          'flex flex-wrap items-center gap-2',
          'p-4',
          'rounded-md',
          'border border-input',
          'bg-[#404040]',
          'focus-within:ring-1 focus-within:ring-ring',
          'transition-colors',
          wrapperClassName
        )}
      >
        <ChipList
          labels={chips}
          onDelete={removeChip}
          chipClassName={chipClassName}
          className="gap-2"
        />
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={chips.length === 0 ? placeholder : ''}
          disabled={chips.length >= maxChips}
          className={cn(
            'flex-1',
            'outline-none',
            'bg-transparent',
            'placeholder:text-white placeholder:font-bold',
            chips.length >= maxChips && 'cursor-not-allowed'
          )}
        />
      </div>
    </div>
  );
};

export default ChipListInput;
