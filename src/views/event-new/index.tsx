import { zodResolver } from '@hookform/resolvers/zod';
import { Text } from '@radix-ui/themes';
import { useAtom } from 'jotai/react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { submitActionAtom } from '@/store/submitActionAtom';
import FormField from '@/views/event-new/_components/FormField';

const schema = z.object({
  name: z.string().min(1, '이름을 입력해주세요.'),
  email: z
    .string()
    .min(1, '이메일을 입력해주세요.')
    .email('유효한 이메일 주소를 입력해주세요'),
});

const EventNewContainer = () => {
  const [isSubmitAction, setSubmitAction] = useAtom(submitActionAtom);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((formData) => {
    // 폼 데이터 제출 로직
    console.log('Form submitted:', formData);
  });

  useEffect(() => {
    if (isSubmitAction) {
      // 상태 초기화
      setSubmitAction(false);
      // ANCHOR: 등록 액션 처리
      onSubmit();
    }
  }, [isSubmitAction]);

  return (
    <div>
      <Text>이벤트 등록페이지</Text>
      <form onSubmit={onSubmit}>
        <FormField
          name="name"
          placeholder="Enter your username"
          register={register}
          error={errors.name}
        />
        <FormField
          name="email"
          placeholder="Enter your email"
          register={register}
          error={errors.email}
        />
      </form>
    </div>
  );
};

export default EventNewContainer;
