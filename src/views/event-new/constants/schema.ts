import * as z from 'zod';

export const schema = z.object({
  title: z.string().min(1, '이벤트 제목을 입력해주세요.'),
  image: z
    .instanceof(File)
    .refine(
      (file) => file.size <= 5 * 1024 * 1024,
      '이미지 크기는 5MB 이하이어야 합니다.'
    ) // 크기 제한
    .refine(
      (file) => ['image/jpeg', 'image/png', 'image/gif'].includes(file.type),
      '이미지는 JPEG, PNG, GIF 형식만 지원합니다.'
    ),
  startDate: z
    .string()
    .min(1, '시작일을 입력해주세요.')
    .refine((val) => !isNaN(Date.parse(val)), '유효한 날짜 형식이 아닙니다.')
    .transform((val) => new Date(val)),
  endDate: z
    .string()
    .min(1, '종료일을 입력해주세요.')
    .refine((val) => !isNaN(Date.parse(val)), '유효한 날짜 형식이 아닙니다.')
    .transform((val) => new Date(val)),
  startTime: z.string().optional(),
  endTime: z.string().optional(),
  venue: z.string().min(1, '장소를 입력해주세요.'),
  address: z.string().optional(),
  information: z.string().min(1, '정보를 입력해주세요.'),
  organizer: z.string().min(1, '주최·주관을 입력해주세요.'),
  sponsor: z.string().optional(),
  tags: z.string().optional(),
});
