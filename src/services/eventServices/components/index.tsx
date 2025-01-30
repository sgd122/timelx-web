import { Flex, Section, Text } from '@radix-ui/themes';
import { useAtom } from 'jotai/react';
import { useEffect } from 'react';
import { IoIosInformationCircleOutline } from 'react-icons/io';

import { RegisterProvider } from '@/components/providers/RegisterProvider';
import DeleteButton from '@/services/eventServices/components/ui/DeleteButton';
import EventDetail from '@/services/eventServices/components/ui/EventDetail';
import EventImage from '@/services/eventServices/components/ui/EventImage';
import {
  detailFieldsSection0,
  detailFieldsSection1,
  detailFieldsSection2,
  detailFieldsSection3,
} from '@/services/eventServices/constants/fieldDefinitions';
import { useEventForm } from '@/services/eventServices/hooks/useEventForm';
import { useEventTimeValidation } from '@/services/eventServices/hooks/useEventTimeValidation';
import { useFormDirty } from '@/services/eventServices/hooks/useFormDirty';
import type { FieldDefinition } from '@/services/eventServices/types/field-definition';
import type { FormValues } from '@/services/eventServices/types/form-values';
import { submitActionAtom } from '@/store/submitActionAtom';

interface EventServiceComponentProps {
  data?: FormValues;
  onSubmit?: (data: FormValues) => void;
  isEdit?: boolean;
}

// TODO: isEdit 일 경우 유저 본인 체크로직이 들어가야한다.
const EventServiceComponent: React.FC<EventServiceComponentProps> = ({
  data,
  onSubmit,
  isEdit = false,
}) => {
  const [isSubmitAction, setSubmitAction] = useAtom(submitActionAtom);
  const { register, handleSubmit, formState, getValues, watch, setValue } =
    useEventForm(data);

  const { setFormDirty } = useFormDirty();

  // 시간 관리 로직
  useEventTimeValidation({ watch, setValue });

  const _onSubmit = handleSubmit((data) => {
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
    console.log('onDelete');
  };

  const renderEventDetails = (fields: FieldDefinition[]) =>
    fields.map(
      ({ label, title, value, isRequired, placeholder, type, fieldType }) => (
        <EventDetail<FormValues>
          key={`event-form-${label}-${value}`}
          label={label}
          title={title}
          name={value as keyof FormValues}
          error={formState.errors[value as keyof FormValues]}
          isRequired={isRequired}
          placeholder={placeholder}
          type={type}
          fieldType={fieldType}
        />
      )
    );

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
            />

            {/* 첫 번째 섹션 */}
            {renderEventDetails(detailFieldsSection0)}

            {/* 이벤트 날짜 */}
            <Flex direction="column" className="gap-1">
              <Text size="2">
                이벤트 날짜<span className="text-red-400"> *</span>
              </Text>
              <Flex className="gap-5" direction="column">
                <Flex className="gap-3.5 justify-between max-w-[87vw]">
                  {renderEventDetails(detailFieldsSection1)}
                </Flex>
              </Flex>
            </Flex>

            {/* 이벤트 시간 */}
            <Flex direction="column" className="gap-1">
              <Text size="2">이벤트 시간</Text>
              <Flex className="gap-3.5 justify-between max-w-[87vw]">
                {renderEventDetails(detailFieldsSection2)}
              </Flex>
              <Flex className="justify-center mt-0.5 max-w-[87vw]">
                <IoIosInformationCircleOutline size="18" className="mr-1" />
                <Text size="2">
                  다양한 시간에 걸쳐 진행되는 경우, ‘이벤트 정보’에 별도로
                  입력해주세요.
                </Text>
              </Flex>
            </Flex>

            {/* 추가 섹션 */}
            {renderEventDetails(detailFieldsSection3)}

            {isEdit && <DeleteButton onDelete={onDelete} />}
          </Section>
        </form>
      </div>
    </RegisterProvider>
  );
};

export default EventServiceComponent;
