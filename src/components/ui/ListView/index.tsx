import { Text } from '@radix-ui/themes';
import Link from 'next/link';
import type React from 'react';
import { FaChevronRight } from 'react-icons/fa';

import { cn } from '@/lib/utils';

interface ListViewItemProps {
  label: string;
  href: string;
}

interface ListViewProps {
  items: ListViewItemProps[];
  className?: string;
}

const ListViewItem: React.FC<ListViewItemProps> = ({ label, href }) => {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          'w-full',
          'flex items-center justify-between',
          'px-4 py-4',
          'border-b border-tx-white',
          'hover:bg-neutral-800',
          'transition-colors'
        )}
      >
        <Text size="2" className="flex-1">
          {label}
        </Text>
        <FaChevronRight className="text-tx-white" />
      </Link>
    </li>
  );
};

/**
 * @example
 * ```tsx
 * const items: ListItemProps[] = [
 *  { label: 'Item 1', href: '/item1' },
 *  { label: 'Item 2', href: '/item2' },
 *  { label: 'Item 3', href: '/item3' },
 * ];
 *
 * <ListView items={items} />
 * ```
 */
const ListView: React.FC<ListViewProps> = ({ items, className }) => {
  return (
    <nav className={cn('w-full divide-y divide-gray-700', className)}>
      <ul>
        {items.map((item, index) => (
          <ListViewItem key={index} {...item} />
        ))}
      </ul>
    </nav>
  );
};

export default ListView;
