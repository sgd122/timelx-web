import { Flex, Section, Text } from '@radix-ui/themes';
import { useAtom } from 'jotai/react';
import { useEffect } from 'react';
import { IoIosInformationCircleOutline } from 'react-icons/io';

import { RegisterProvider } from '@/components/providers/RegisterProvider';
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
import DeleteButton from '@/views/event-edit/_components/DeleteButton';
import EventDetail from '@/views/event-edit/_components/EventDetail';
import EventImage from '@/views/event-edit/_components/EventImage';

const TEST_DATA: FormValues = {
  title: 'title',
  startDate: '2025-01-21',
  endDate: '2025-01-23',
  startTime: 'startTime',
  endTime: 'endTime',
  venue: 'venue',
  address: 'address',
  information: 'information',
  organizer: 'organizer',
  urlName: 'urlName',
  urlLink: 'urlLink',
  tags: 'tags',
  image:
    'data:image/jpeg;base64,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',
};

const EventEditContainer = () => {
  const [isSubmitAction, setSubmitAction] = useAtom(submitActionAtom);
  const { register, handleSubmit, formState, getValues, watch, setValue } =
    useEventForm(TEST_DATA);

  const { setFormDirty } = useFormDirty();

  // 시간 관리 로직
  useEventTimeValidation({ watch, setValue });

  const onSubmit = handleSubmit((data) => {
    console.log('Form submitted:', data);
    setFormDirty(false); // 제출 후 dirty 상태 초기화
  });

  useEffect(() => {
    if (isSubmitAction) {
      setSubmitAction(false);
      onSubmit();
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
          onSubmit={onSubmit}
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

            <DeleteButton onDelete={onDelete} />
          </Section>
        </form>
      </div>
    </RegisterProvider>
  );
};

export default EventEditContainer;
