import { Avatar, Box } from '@radix-ui/themes';
import type React from 'react';
import { useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';

interface ProfileAvatarProps {
  src: string; // 초기 아바타 이미지 경로
  isEditing?: boolean; // 편집 여부
  onClick?: (image: File | null) => void; // 이미지 선택 시 호출
}

/**
 * `ProfileAvatar` 컴포넌트
 *
 * 사용자 프로필 아바타를 렌더링하며, 편집 모드일 경우 하단에 편집 아이콘을 표시합니다.
 * 파일 선택 입력(`input[type="file"]`)을 사용하여 이미지를 선택하고, 선택된 이미지를 아바타에 표시하며 부모로 전달합니다.
 *
 * ---
 * 🌟 **주요 기능**:
 * - 사용자 프로필 아바타 표시.
 * - 아바타 하단 우측에 편집 아이콘(`FiEdit2`) 표시 (편집 모드일 경우).
 * - 파일 선택 시 이미지를 아바타에 업데이트하고 부모 컴포넌트로 전달.
 *
 * ---
 * 📋 **Props**:
 * - `src` (필수): 초기 아바타 이미지 경로.
 * - `isEditing` (선택): 편집 모드 여부. 기본값은 `false`.
 * - `onClick` (선택): 이미지 선택 시 호출되는 콜백 함수. 선택된 이미지(`File | null`)를 전달.
 *
 * ---
 * 💡 **사용 예제**:
 * ```tsx
 * <ProfileAvatar
 *   src="/path/to/avatar.jpg"
 *   isEditing={true}
 *   onClick={(image) => console.log('선택된 이미지:', image)}
 * />
 * ```
 */
const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  src,
  isEditing = false,
  onClick,
}) => {
  const [avatarSrc, setAvatarSrc] = useState<string>(src); // 현재 아바타 이미지 경로 상태

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null; // 선택된 파일
    if (file) {
      const fileURL = URL.createObjectURL(file); // 로컬 파일 URL 생성
      setAvatarSrc(fileURL); // 아바타 이미지 경로 업데이트
      if (onClick) {
        onClick(file); // 부모 컴포넌트로 파일 전달
      }
    }
  };

  return (
    <Box className="relative w-fit">
      {/* Avatar */}
      <Avatar size="6" radius="full" src={avatarSrc} fallback="A" />
      {/* Edit Icon (조건부 렌더링) */}
      {isEditing && (
        <Box className="absolute bottom-0 right-0">
          <label className="bg-blue-500 text-white rounded-full p-2 cursor-pointer shadow-md hover:bg-blue-600 transition-colors flex items-center">
            <FiEdit2 size={16} />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange} // 파일 선택 핸들러
            />
          </label>
        </Box>
      )}
    </Box>
  );
};

export default ProfileAvatar;
