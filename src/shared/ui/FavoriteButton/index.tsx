import { Button } from '@radix-ui/themes';
import type * as React from 'react';
import { useOptimistic, useState } from 'react';
import { FiHeart } from 'react-icons/fi';

import { useAuthSession } from '@/shared/hooks/useAuthSession';
import { useToaster } from '@/shared/hooks/useToaster';
import { cn } from '@/shared/lib/utils';

interface FavoriteButtonProps {
  postId: number;
  favorite?: boolean;
  onFavoriteToggle: (favorite: boolean, postId: number) => Promise<void>;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  postId,
  favorite = false,
  onFavoriteToggle,
}) => {
  const { isAuthenticated } = useAuthSession();
  const [isLoading, setIsLoading] = useState(false);
  const toaster = useToaster();

  const [state, reducerFn] = useOptimistic(
    { favorite },
    (prev, action: { type: 'TOGGLE' }) => ({
      favorite: !prev.favorite,
    })
  );

  const handleIsAuthenticated = () => {
    if (!isAuthenticated) {
      toaster.error('로그인이 필요합니다.');
      return false;
    }
    return true;
  };

  const handleFavoriteToggle = async () => {
    if (isLoading) return;
    setIsLoading(true);
    reducerFn({ type: 'TOGGLE' }); // 화면에 먼저 반영

    try {
      await onFavoriteToggle(!state.favorite, postId);
    } catch (error) {
      console.error('Failed to update favorite state:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const onClick = async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    const isAuthenticated = await handleIsAuthenticated();

    if (!isAuthenticated) {
      return;
    }

    await handleFavoriteToggle();
  };

  return (
    <Button
      variant="outline"
      onClick={onClick}
      disabled={isLoading}
      className="p-1 shadow-none"
      aria-label="찜하기"
    >
      <FiHeart
        size={24}
        className={cn(
          'transition-colors',
          state.favorite
            ? 'text-red-600 fill-current'
            : 'text-gray-400 fill-transparent'
        )}
      />
    </Button>
  );
};

export default FavoriteButton;
