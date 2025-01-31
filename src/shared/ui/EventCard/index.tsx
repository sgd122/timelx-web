import Image from 'next/image';
import Link from 'next/link';
import type * as React from 'react';
import { MdEdit } from 'react-icons/md';

import { handleFavoriteToggle } from '@/features/favorite/utils/handleFavoriteToggle';
import { cn } from '@/shared/lib/utils';
import FavoriteButton from '@/shared/ui/FavoriteButton';

interface EventCardProps {
  id: number;
  image: string;
  title: string;
  date: string;
  location: string;
  isFavorite?: boolean;
  isEdit?: boolean;
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
 * - `id` (필수): 이벤트 ID
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
 *   id=0
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
  isEdit = false,
}) => {
  const refetchPostList = async () => {
    console.log('refetchPostList');
  };

  return (
    <Link
      href={isEdit ? `/event/${id}/edit` : `/event/${id}`}
      className={cn('flex items-center gap-4')}
    >
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
      {isEdit ? (
        <MdEdit size={24} />
      ) : (
        <FavoriteButton
          postId={id}
          favorite={isFavorite}
          onFavoriteToggle={(newFavorite, postId) =>
            handleFavoriteToggle(newFavorite, postId, refetchPostList)
          }
        />
      )}
    </Link>
  );
};

export default EventCard;
