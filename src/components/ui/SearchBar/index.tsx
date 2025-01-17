import { Box, Text } from '@radix-ui/themes';
import type React from 'react';

import { cn } from '@/lib/utils';

type SearchBarProps = React.PropsWithChildren & {
  className?: string;
};

/**
 * @example
 * ```tsx
 * <SearchBar>
 *   2025년 02월 08일 서울의 전시회 시간을 밝혀줘
 * </SearchBar>
 * ```
 */
const SearchBar: React.FC<SearchBarProps> = ({ children, className }) => {
  return (
    <Box
      className={cn(
        'block',
        'w-fit max-w-[80%]',
        'ml-auto',
        'px-4 py-2',
        'rounded-full',
        'bg-tx-white text-tx-black',
        className
      )}
    >
      <Text size="1">{children}</Text>
    </Box>
  );
};

export default SearchBar;
