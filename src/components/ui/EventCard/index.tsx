import * as React from 'react';
import { FiHeart } from 'react-icons/fi';

import { cn } from '@/lib/utils';

interface EventCardProps {
  image: string;
  title: string;
  date: string;
  location: string;
  isFavorite?: boolean;
  onFavoriteToggle?: (isFavorite: boolean) => void;
}

const EventCard: React.FC<EventCardProps> = ({
  image,
  title,
  date,
  location,
  isFavorite = false,
  onFavoriteToggle,
}) => {
  const [favorite, setFavorite] = React.useState(isFavorite);

  const handleToggle = () => {
    const newValue = !favorite;
    setFavorite(newValue);
    onFavoriteToggle?.(newValue);
  };

  return (
    <div
      className={cn(
        'flex items-center gap-4 p-4 bg-accent text-white rounded-lg shadow-md'
      )}
    >
      {/* 이미지 */}
      <div
        className="w-16 h-16 flex-shrink-0 rounded-lg bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        aria-label={title}
      ></div>

      {/* 텍스트 컨텐츠 */}
      <div className="flex flex-col flex-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-400">{date}</p>
        <p className="text-sm text-gray-500">{location}</p>
      </div>

      {/* 찜 버튼 */}
      <button onClick={handleToggle} className="p-1" aria-label="찜하기">
        <FiHeart
          size={24}
          className={cn(
            'transition-colors',
            favorite
              ? 'text-red-600 fill-current'
              : 'text-gray-400 fill-transparent'
          )}
        />
      </button>
    </div>
  );
};

export default EventCard;
