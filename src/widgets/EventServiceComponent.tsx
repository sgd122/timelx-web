import { Section } from '@radix-ui/themes';
import { useAtom } from 'jotai/react';
import { useEffect } from 'react';

import {
  detailFieldsSection0,
  detailFieldsSection3,
  detailFieldsSection5,
} from '@/features/event/constants/fieldDefinitions';
import { useEventForm } from '@/features/event/hooks/useEventForm';
import { useEventTimeValidation } from '@/features/event/hooks/useEventTimeValidation';
import { useFormDirty } from '@/features/event/hooks/useFormDirty';
import type { FormValues } from '@/features/event/types/form-values';
import DeleteButton from '@/features/event/ui/DeleteButton';
import EventDateWrapper from '@/features/event/ui/EventDateWrapper';
import EventImage from '@/features/event/ui/EventImage';
import EventTimeWrapper from '@/features/event/ui/EventTimeWrapper';
import URLWrapper from '@/features/event/ui/URLWrapper';
import { renderEventDetails } from '@/features/event/utils/renderEventDetails';
import { RegisterProvider } from '@/shared/providers/RegisterProvider';
import { submitActionAtom } from '@/shared/store/submitActionAtom';

interface EventServiceComponentProps {
  data?: FormValues;
  onSubmit?: (data: FormValues) => void;
  isEdit?: boolean;
  isReadOnly?: boolean;
}

// TODO: isEdit 일 경우 유저 본인 체크로직이 들어가야한다.
const EventServiceComponent: React.FC<EventServiceComponentProps> = ({
  data,
  onSubmit,
  isEdit = false,
  isReadOnly = false,
}) => {
  const [isSubmitAction, setSubmitAction] = useAtom(submitActionAtom);
  const { register, handleSubmit, formState, getValues, watch, setValue } =
    useEventForm(data);

  const { setFormDirty } = useFormDirty();

  // 시간 관리 로직 validation
  useEventTimeValidation({ watch, setValue });

  const _onSubmit = handleSubmit((data) => {
    if (isReadOnly) return;
    onSubmit?.(data);
    setFormDirty(false); // 제출 후 dirty 상태 초기화
  });

  useEffect(() => {
    if (isSubmitAction) {
      setSubmitAction(false);
      _onSubmit();
    }
  }, [isSubmitAction]);

  const onDelete = () => {
    if (isReadOnly) return;
    console.log('onDelete');
  };

  return (
    <RegisterProvider register={register} watch={watch} setValue={setValue}>
      <div>
        <form
          onSubmit={_onSubmit}
          onChange={() => setFormDirty(true)} // 폼 변경 시 dirty 상태로 설정
        >
          <Section className="flex flex-col gap-8 p-0">
            {/* 이미지 업로드 */}
            <EventImage
              image={getValues('image') as string}
              name="image"
              error={formState.errors.image}
              isReadOnly={isReadOnly}
            />

            {/* 첫 번째 섹션 */}
            {renderEventDetails({
              fields: detailFieldsSection0,
              form: { formState, getValues },
              isReadOnly,
            })}

            {/* 이벤트 날짜 */}
            <EventDateWrapper
              isReadOnly={isReadOnly}
              form={{ formState, getValues }}
            />

            {/* 이벤트 시간 */}
            <EventTimeWrapper
              isReadOnly={isReadOnly}
              form={{ formState, getValues }}
            />

            {/* 추가 섹션 */}
            {renderEventDetails({
              fields: detailFieldsSection3,
              form: { formState, getValues },
              isReadOnly,
            })}

            {/* URL 링크 */}
            <URLWrapper
              isReadOnly={isReadOnly}
              form={{ formState, getValues }}
            />

            {/* tags */}
            {renderEventDetails({
              fields: detailFieldsSection5,
              form: { formState, getValues },
              isReadOnly,
            })}

            {isEdit && <DeleteButton onDelete={onDelete} />}
          </Section>
        </form>
      </div>
    </RegisterProvider>
  );
};

export default EventServiceComponent;
