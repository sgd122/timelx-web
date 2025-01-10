import { Avatar, Box } from '@radix-ui/themes';
import type React from 'react';
import { FiEdit2 } from 'react-icons/fi';

interface ProfileAvatarProps {
  src: string;
  onClick?: () => void;
}

/**
 * `ProfileAvatar` 컴포넌트
 *
 * 사용자 프로필 아바타를 렌더링하며, 하단에 편집 아이콘을 표시합니다.
 * 아이콘을 클릭하면 편집 동작을 트리거할 수 있습니다.
 *
 * ---
 * 🌟 **주요 기능**:
 * - 사용자 프로필 아바타 표시.
 * - 아바타 하단 우측에 편집 아이콘(`FiEdit2`) 표시.
 * - 편집 아이콘 클릭 시 이벤트 트리거(`onClick`).
 *
 * ---
 * 📋 **Props**:
 * - `src` (필수): 아바타 이미지 경로.
 * - `onClick` (선택): 편집 아이콘 클릭 시 호출되는 콜백 함수.
 *
 * ---
 * 💡 **사용 예제**:
 * ```tsx
 * <ProfileAvatar
 *   src="/path/to/avatar.jpg"
 *   onClick={() => console.log('편집 아이콘 클릭!')}
 * />
 * ```
 */
const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ src, onClick }) => {
  return (
    <Box className="relative w-fit">
      <Avatar size="6" radius="full" src={src} fallback="A" />
      <Box
        className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-2 cursor-pointer shadow-md hover:bg-blue-600 transition-colors"
        onClick={onClick}
      >
        <FiEdit2 size={10} />
      </Box>
    </Box>
  );
};

export default ProfileAvatar;
