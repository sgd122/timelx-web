import { Text } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

import { cn } from '@/shared/lib/utils';

// Union 타입 정의
type ListViewItemProps =
  | { label: string; href: string; onClick?: never; icon?: React.ReactNode } // href가 있는 경우
  | {
      label: string;
      onClick: () => void;
      href?: never;
      icon?: React.ReactNode;
    }; // onClick이 있는 경우

interface ListViewProps {
  items: ListViewItemProps[];
  className?: string;
}

const renderWithLineBreaks = (text: string) =>
  text.split('\n').map((line, idx) => (
    <React.Fragment key={idx}>
      {line}
      <br />
    </React.Fragment>
  ));

const ListViewItem: React.FC<ListViewItemProps> = (props) => {
  const { label, icon } = props;

  if (props.href !== undefined) {
    const isExternalLink =
      props.href.startsWith('http://') || props.href.startsWith('https://');

    return (
      <li>
        <Link
          href={props.href}
          {...(isExternalLink
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {})}
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
            {renderWithLineBreaks(label)}
          </Text>
          {icon ? icon : <FaChevronRight className="text-tx-white" />}
        </Link>
      </li>
    );
  }

  if ('onClick' in props) {
    return (
      <li
        onClick={props.onClick}
        className={cn(
          'cursor-pointer',
          'w-full',
          'flex items-center justify-between',
          'px-4 py-4',
          'border-b border-tx-white',
          'hover:bg-neutral-800',
          'transition-colors'
        )}
      >
        <Text size="2" className="flex-1">
          {renderWithLineBreaks(label)}
        </Text>
        {icon ? icon : <FaChevronRight className="text-tx-white" />}
      </li>
    );
  }

  return null; // 불필요한 경우 처리
};

/**
 * @example
 * ```tsx
 * const items: ListItemProps[] = [
 *  { label: 'Item 1', href: '/item1' },
 *  { label: 'Item 2', onClick: () => alert('Clicked Item 2') },
 *  { label: 'Item 3', href: 'https://example.com' },
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
