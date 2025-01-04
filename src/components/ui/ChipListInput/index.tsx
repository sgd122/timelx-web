import type { KeyboardEvent } from 'react';
import { useState } from 'react';

import ChipList from '@/components/ui/ChipList';
import useInput from '@/hooks/useInput';
import { cn } from '@/lib/utils';

interface ChipListInputProps {
  placeholder?: string;
  maxChips?: number;
  onChange?: (values: string[]) => void;
  className?: string;
  chipClassName?: string;
}

/**
 * @example
 * ```tsx
 * <ChipListInput
 *   placeholder="이벤트 주제를 태그해주세요 (최대 3개)"
 *   onChange={(values) => console.log('Current tags:', values)}
 * />
 * ```
 */
const ChipListInput = ({
  placeholder,
  maxChips = Infinity,
  onChange,
  className,
  chipClassName,
}: ChipListInputProps) => {
  const [value, handler, setValue] = useInput('');
  const [chips, setChips] = useState<string[]>([]);

  const addChip = (newValue: string) => {
    if (!newValue.trim()) return;
    if (chips.length >= maxChips) return;

    const newChips = [...chips, newValue.trim()];
    setChips(newChips);
    setValue('');
    onChange?.(newChips);
  };

  const removeChip = (index: number) => {
    const newChips = chips.filter((_, i) => i !== index);
    setChips(newChips);
    onChange?.(newChips);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addChip(value);
    }
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
          'transition-colors'
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
          onChange={handler}
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
