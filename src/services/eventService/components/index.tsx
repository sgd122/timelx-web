import { Flex, Section, Text } from '@radix-ui/themes';
import { useAtom } from 'jotai/react';
import Link from 'next/link';
import { useEffect } from 'react';
import { IoIosInformationCircleOutline } from 'react-icons/io';

import { RegisterProvider } from '@/components/providers/RegisterProvider';
import DeleteButton from '@/services/eventService/components/ui/DeleteButton';
import EventDetail from '@/services/eventService/components/ui/EventDetail';
import EventImage from '@/services/eventService/components/ui/EventImage';
import {
  detailFieldsSection0,
  detailFieldsSection1,
  detailFieldsSection2,
  detailFieldsSection3,
  detailFieldsSection4,
  detailFieldsSection5,
} from '@/services/eventService/constants/fieldDefinitions';
import { useEventForm } from '@/services/eventService/hooks/useEventForm';
import { useEventTimeValidation } from '@/services/eventService/hooks/useEventTimeValidation';
import { useFormDirty } from '@/services/eventService/hooks/useFormDirty';
import type { FieldDefinition } from '@/services/eventService/types/field-definition';
import type { FormValues } from '@/services/eventService/types/form-values';
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

  // 시간 관리 로직
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

  const EventDateWrapper = () => {
    const hasData = detailFieldsSection1.some((field) =>
      getValues(field.value as keyof FormValues)
    );

    if (!hasData) return null; // ✅ 값이 없으면 렌더링하지 않음

    return (
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
    );
  };
  const EventTimeWrapper = () => {
    const hasData = detailFieldsSection2.some((field) =>
      getValues(field.value as keyof FormValues)
    );

    if (!hasData) return null; // ✅ 값이 없으면 렌더링하지 않음

    if (isReadOnly) {
      return (
        <Flex direction="column" className="gap-1">
          <Text size="2">이벤트 시간</Text>
          <Flex className="gap-3.5 justify-between max-w-[87vw]">
            {renderEventDetails(detailFieldsSection2)}
          </Flex>
        </Flex>
      );
    }

    return (
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
    );
  };

  const URLWrapper = () => {
    const urlValues: string[] = [];
    detailFieldsSection4.map((field) => {
      const _value = getValues(field.value as keyof FormValues) as string;
      urlValues.push(_value);
    });

    const isExternalLink =
      urlValues[1]?.startsWith('http://') ||
      urlValues[1]?.startsWith('https://');

    if (isReadOnly) {
      return (
        <Flex direction="column" className="gap-1">
          <Text size="2">링크</Text>

          <div className="pl-2 py-2 sm:px-6 border rounded-md bg-accent w-full ">
            {isExternalLink ? (
              <Text
                className="text-tx-gray-50 opacity-70 cursor-pointer"
                size="2"
                asChild={true}
              >
                <Link href={`${urlValues[1]}`}>{urlValues[0]}</Link>
              </Text>
            ) : (
              <Text className="text-tx-gray-50 opacity-70" size="2">
                {urlValues[0]}
              </Text>
            )}
          </div>
        </Flex>
      );
    }

    return renderEventDetails(detailFieldsSection4);
  };

  const renderEventDetails = (fields: FieldDefinition[]) =>
    fields.map(
      ({ label, title, value, isRequired, placeholder, type, fieldType }) => (
        <EventDetail<FormValues>
          key={`event-form-${label}-${value}`}
          label={label}
          title={title}
          name={value as keyof FormValues}
          value={getValues(value as keyof FormValues)}
          error={formState.errors[value as keyof FormValues]}
          isRequired={isRequired}
          placeholder={placeholder}
          type={type}
          fieldType={fieldType}
          isReadOnly={isReadOnly}
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
              isReadOnly={isReadOnly}
            />

            {/* 첫 번째 섹션 */}
            {renderEventDetails(detailFieldsSection0)}

            {/* 이벤트 날짜 */}
            <EventDateWrapper />

            {/* 이벤트 시간 */}
            <EventTimeWrapper />

            {/* 추가 섹션 */}
            {renderEventDetails(detailFieldsSection3)}

            {/* URL 링크 */}
            <URLWrapper />

            {/* tags */}
            {renderEventDetails(detailFieldsSection5)}

            {isEdit && <DeleteButton onDelete={onDelete} />}
          </Section>
        </form>
      </div>
    </RegisterProvider>
  );
};

export default EventServiceComponent;
