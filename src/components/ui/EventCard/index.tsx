import { Button } from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { FiHeart } from 'react-icons/fi';

import { cn } from '@/lib/utils';

interface EventCardProps {
  id: number;
  image: string;
  title: string;
  date: string;
  location: string;
  isFavorite?: boolean;
  onFavoriteToggle?: (isFavorite: boolean) => void;
}

/**
 * `EventCard` 컴포넌트
 *
 * 이벤트 정보를 카드 형식으로 렌더링합니다. 이벤트 이미지, 제목, 날짜, 장소를 표시하며,
 * 찜(좋아요) 버튼을 통해 사용자가 선호 이벤트를 저장할 수 있습니다.
 *
 * ---
 * 🌟 **주요 기능**:
 * - 이벤트 정보를 카드 형태로 표시.
 * - 찜(좋아요) 버튼을 눌러 상태를 변경 가능.
 * - 상태 변경 시 부모 컴포넌트에 알림(`onFavoriteToggle`).
 *
 * ---
 * 📋 **Props**:
 * - `image` (필수): 이벤트 이미지 경로.
 * - `title` (필수): 이벤트 제목.
 * - `date` (필수): 이벤트 날짜 문자열.
 * - `location` (필수): 이벤트 장소 문자열.
 * - `isFavorite` (선택): 초기 찜 여부. 기본값은 `false`.
 * - `onFavoriteToggle` (선택): 찜 상태 변경 시 호출되는 콜백 함수.
 *
 * ---
 * 💡 **사용 예제**:
 * ```tsx
 * <EventCard
 *   image="/path/to/image.jpg"
 *   title="YOUNG POSSE CONCERT"
 *   date="2024.12.14.(토)"
 *   location="예스24 원더로그홀"
 *   isFavorite={true}
 *   onFavoriteToggle={(isFavorite) => console.log('찜 상태:', isFavorite)}
 * />
 * ```
 */
const EventCard: React.FC<EventCardProps> = ({
  id,
  image,
  title,
  date,
  location,
  isFavorite = false,
  onFavoriteToggle,
}) => {
  const [favorite, setFavorite] = React.useState(isFavorite);

  const handleToggle = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    const newValue = !favorite;
    setFavorite(newValue);
    onFavoriteToggle?.(newValue);
  };

  return (
    <Link href={`/event/${id}`} className={cn('flex items-center gap-4')}>
      {/* 이미지 */}
      <Image
        src={image}
        alt={title}
        width={60}
        height={60}
        className="w-[60px] h-[60px] rounded-lg object-cover"
      />

      {/* 텍스트 컨텐츠 */}
      <div className="flex flex-col flex-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-400">{date}</p>
        <p className="text-sm text-gray-500">{location}</p>
      </div>

      {/* 찜 버튼 */}
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
    </Link>
  );
};

export default EventCard;
