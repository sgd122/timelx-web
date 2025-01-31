import { FiX } from 'react-icons/fi';

import { cn } from '@/shared/lib/utils';

export interface ChipProps {
  label: string;
  onDelete?: () => void;
  className?: string;
}

/**
 * @example
 * ```tsx
 * // 읽기 전용
 * <Chip label="Example" />
 *
 * // 삭제 가능
 * <Chip
 *   label="Example"
 *   onDelete={() => console.log('deleted')}
 * />
 * ```
 */
const Chip = ({ label, onDelete, className }: ChipProps) => {
  return (
    <div
      className={cn(
        'inline-flex justify-center items-center gap-1',
        'px-2 py-1.5',
        'rounded-full',
        'bg-primary text-primary-foreground',
        'text-[10px] font-semibold',
        'transition-colors',
        className
      )}
    >
      <span className="leading-3">{label}</span>
      {onDelete && (
        <button
          type="button"
          onClick={onDelete}
          className={cn(
            'rounded-full border border-solid border-primary-foreground',
            'hover:bg-primary-foreground/20',
            'transition-colors'
          )}
          aria-label={`Remove ${label}`}
        >
          <FiX size={12} />
        </button>
      )}
    </div>
  );
};

export default Chip;
