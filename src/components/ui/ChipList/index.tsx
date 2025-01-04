import Chip from '@/components/ui/Chip';
import { cn } from '@/lib/utils';

interface ChipListProps {
  labels: string[];
  onDelete?: (index: number) => void;
  className?: string;
  chipClassName?: string;
}

/**
 * @example
 * ```tsx
 * // 읽기 전용
 * <ChipList labels={['TypeScript', 'React']} readonly />
 *
 * // 삭제 가능
 * <ChipList
 *   labels={['TypeScript', 'React']}
 *   onDelete={(index) => handleDelete(index)}
 * />
 * ```
 */
const ChipList = ({
  labels,
  className,
  chipClassName,
  onDelete,
}: ChipListProps) => {
  if (labels.length === 0) return null;

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {labels.map((label, index) => (
        <Chip
          key={`${label}-${index}`}
          label={label}
          className={chipClassName}
          onDelete={onDelete && (() => onDelete(index))}
        />
      ))}
    </div>
  );
};

export default ChipList;
