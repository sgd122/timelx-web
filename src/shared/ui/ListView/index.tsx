import { Text } from '@radix-ui/themes';
import Link from 'next/link';
import type { JSX } from 'react';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

import { cn } from '@/shared/lib/utils';

// Union 타입 정의
type ListViewItemProps =
  | {
      as?: keyof JSX.IntrinsicElements;
      label: string;
      href: string;
      onClick?: never;
      icon?: React.ReactNode;
      render?: React.ReactNode;
    } // href가 있는 경우
  | {
      as?: keyof JSX.IntrinsicElements;
      label: string;
      onClick: () => void;
      href?: never;
      icon?: React.ReactNode;
      render?: React.ReactNode;
    }; // onClick이 있는 경우

interface ListViewProps {
  items: ListViewItemProps[];
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const renderWithLineBreaks = (text: string) =>
  text.split('\n').map((line, idx) => (
    <React.Fragment key={idx}>
      {line}
      <br />
    </React.Fragment>
  ));

const ListViewItem: React.FC<ListViewItemProps> = (props) => {
  const { label, icon, as: HeadingTag = 'h3', render } = props;

  if (render) {
    // ✅ render가 존재하면 해당 내용만 렌더링
    return (
      <li
        className={cn(
          'w-full',
          'flex items-center justify-between',
          'px-4 py-4',
          'border-b border-tx-white',
          'hover:bg-neutral-800',
          'transition-colors',
          'cursor-pointer'
        )}
      >
        <HeadingTag>{render}</HeadingTag>
        {icon ? icon : <FaChevronRight className="text-tx-white" />}
      </li>
    );
  }

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
            <HeadingTag>{renderWithLineBreaks(label)}</HeadingTag>
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
          <HeadingTag>{renderWithLineBreaks(label)}</HeadingTag>
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
const ListView: React.FC<ListViewProps> = ({ items, as, className }) => {
  return (
    <nav className={cn('w-full divide-y divide-gray-700', className)}>
      <ul>
        {items.map((item, index) => (
          <ListViewItem key={index} as={as} {...item} />
        ))}
      </ul>
    </nav>
  );
};

export default ListView;
