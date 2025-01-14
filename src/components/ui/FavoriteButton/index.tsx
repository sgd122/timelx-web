import { Button } from '@radix-ui/themes';
import type * as React from 'react';
import { FiHeart } from 'react-icons/fi';

import { cn } from '@/lib/utils';

interface FavoriteButtonProps {
  handleToggle: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  favorite?: boolean;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  handleToggle,
  favorite,
}) => {
  return (
    <Button
      variant="outline"
      onClick={handleToggle}
      className="p-1 shadow-none"
      aria-label="찜하기"
    >
      <FiHeart
        size={24}
        className={cn(
          'transition-colors',
          favorite
            ? 'text-red-600 fill-current'
            : 'text-gray-400 fill-transparent'
        )}
      />
    </Button>
  );
};

export default FavoriteButton;
