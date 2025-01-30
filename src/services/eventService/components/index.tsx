import { Section } from '@radix-ui/themes';
import { useAtom } from 'jotai/react';
import { useEffect } from 'react';

import { RegisterProvider } from '@/components/providers/RegisterProvider';
import DeleteButton from '@/services/eventService/components/ui/DeleteButton';
import EventDateWrapper from '@/services/eventService/components/ui/EventDateWrapper';
import EventImage from '@/services/eventService/components/ui/EventImage';
import EventTimeWrapper from '@/services/eventService/components/ui/EventTimeWrapper';
import URLWrapper from '@/services/eventService/components/ui/URLWrapper';
import {
  detailFieldsSection0,
  detailFieldsSection3,
  detailFieldsSection5,
} from '@/services/eventService/constants/fieldDefinitions';
import { useEventForm } from '@/services/eventService/hooks/useEventForm';
import { useEventTimeValidation } from '@/services/eventService/hooks/useEventTimeValidation';
import { useFormDirty } from '@/services/eventService/hooks/useFormDirty';
import type { FormValues } from '@/services/eventService/types/form-values';
import { renderEventDetails } from '@/services/eventService/utils/renderEventDetails';
import { submitActionAtom } from '@/store/submitActionAtom';

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
    <RegisterProvider register={register}>
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
