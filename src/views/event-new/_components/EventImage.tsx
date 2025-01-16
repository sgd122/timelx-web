import Image from 'next/image';
import type React from 'react';
import { useRef, useState } from 'react';
import type {
  FieldError,
  FieldErrors,
  FieldPath,
  FieldValues,
} from 'react-hook-form';

import PlaceholderImage from '@/assets/icon/placeholder-image.png';
import { useRegister } from '@/components/providers/RegisterProvider';
import ErrorField from '@/views/event-new/_components/ErrorField';

interface EventImageProps<TFieldValues extends FieldValues> {
  image?: string;
  name: FieldPath<TFieldValues>; // 특정 필드 이름만 허용
  error?: FieldErrors<TFieldValues>;
}
const EventImage = <TFieldValues extends FieldValues>({
  image = '',
  name,
  error,
}: EventImageProps<TFieldValues>) => {
  const register = useRegister<TFieldValues>();
  const [avatarSrc, setAvatarSrc] = useState<string>(image); // 현재 아바타 이미지 경로 상태
  const fileInputRef = useRef<HTMLInputElement>(null); // 파일 입력 요소에 대한 참조

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null; // 선택된 파일
    if (file) {
      const fileURL = URL.createObjectURL(file); // 로컬 파일 URL 생성
      setAvatarSrc(fileURL); // 아바타 이미지 경로 업데이트
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click(); // 숨겨진 파일 입력 요소 클릭
  };

  // `register` 반환값에 커스텀 onChange를 추가
  const inputProps = register(name);
  const combinedOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFileChange(event); // 커스텀 onChange 실행
    const file = event.target.files?.[0]; // 첫 번째 파일 추출
    if (file) {
      const fileURL = URL.createObjectURL(file); // 파일 미리보기 URL 생성
      setAvatarSrc(fileURL); // 미리보기 업데이트
      inputProps.onChange({
        target: {
          name,
          value: file, // File 객체 전달
        },
        type: 'change',
      } as unknown as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <div className="h-auto -mx-6 [width:calc(100%_+_48px)]">
      {/* 이미지를 클릭하면 파일 입력 창 표시 */}
      <div onClick={handleImageClick} className="cursor-pointer h-full">
        <Image
          src={avatarSrc || PlaceholderImage} // 기본 이미지 경로 설정
          alt="event"
          layout="responsive"
          width={16}
          height={9}
        />
      </div>
      {/* 숨겨진 파일 입력 요소 */}
      <input
        type="file"
        accept="image/*"
        {...inputProps} // `register` 반환 값 사용
        onChange={combinedOnChange} // 확장된 onChange 핸들러
        ref={fileInputRef} // 파일 입력 요소 참조 설정
        className="hidden"
      />
      {error && <ErrorField fieldName={error as FieldError} />}
    </div>
  );
};

export default EventImage;
