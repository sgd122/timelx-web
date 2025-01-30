import * as z from 'zod';

export const baseSchema = z.object({
  title: z.string().min(1, '이벤트 제목을 입력해주세요.'),
  image: z.unknown().superRefine((val, ctx) => {
    if (!(val instanceof File)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: '이미지가 업로드되지 않았습니다.',
      });
      return;
    }
    if (val.size > 5 * 1024 * 1024) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: '이미지 크기는 5MB 이하이어야 합니다.',
      });
    }
    if (!['image/jpeg', 'image/png', 'image/gif'].includes(val.type)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: '이미지는 JPEG, PNG, GIF 형식만 지원합니다.',
      });
    }
  }),
  // TODO: .transform((val) => new Date(val)), 로직이 필요한지 체크필요!
  startDate: z
    .string()
    .min(1, '시작일을 입력해주세요.')
    .refine((val) => !isNaN(Date.parse(val)), '유효한 날짜 형식이 아닙니다.'),
  endDate: z
    .string()
    .min(1, '종료일을 입력해주세요.')
    .refine((val) => !isNaN(Date.parse(val)), '유효한 날짜 형식이 아닙니다.'),
  startTime: z.string().optional(),
  endTime: z.string().optional(),
  venue: z.string().min(1, '장소를 입력해주세요.'),
  address: z.string().optional(),
  information: z.string().min(1, '정보를 입력해주세요.'),
  organizer: z.string().min(1, '주최·주관을 입력해주세요.'),
  urlName: z.string().optional(),
  urlLink: z.string().optional(),
  tags: z.string().optional(),
});

export const schema = baseSchema.refine(
  (data) => {
    if ((data.urlName && !data.urlLink) || (!data.urlName && data.urlLink)) {
      return false;
    }
    return true;
  },
  {
    message: 'url 제목과 url 링크는 함께 입력해야 합니다.',
    path: ['urlName'],
  }
);
