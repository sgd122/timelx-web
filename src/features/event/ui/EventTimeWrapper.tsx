import { Flex, Text } from '@radix-ui/themes';
import type { UseFormReturn } from 'react-hook-form';
import { IoIosInformationCircleOutline } from 'react-icons/io';

import { detailFieldsSection2 } from '@/features/event/constants/fieldDefinitions';
import type { FormValues } from '@/features/event/types/form-values';
import { renderEventDetails } from '@/features/event/utils/renderEventDetails';

interface EventTimeWrapperProps {
  isReadOnly: boolean;
  form: Pick<UseFormReturn<FormValues>, 'getValues' | 'formState'>;
}
const EventTimeWrapper: React.FC<EventTimeWrapperProps> = ({
  isReadOnly,
  form,
}) => {
  const { getValues, formState } = form;
  const hasData = detailFieldsSection2.some((field) =>
    getValues(field.value as keyof FormValues)
  );

  if (isReadOnly && !hasData) return null; // ✅ 값이 없으면 렌더링하지 않음

  if (isReadOnly) {
    return (
      <Flex direction="column" className="gap-1">
        <Text size="2">
          <h3>이벤트 시간</h3>
        </Text>
        <Flex className="gap-3.5 justify-between max-w-[87vw]">
          {renderEventDetails({
            fields: detailFieldsSection2,
            form: { formState, getValues },
            isReadOnly,
          })}
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex direction="column" className="gap-1">
      <Text size="2">이벤트 시간</Text>
      <Flex className="gap-3.5 justify-between max-w-[87vw]">
        {renderEventDetails({
          fields: detailFieldsSection2,
          form: { formState, getValues },
          isReadOnly,
        })}
      </Flex>
      <Flex className="justify-center mt-0.5 max-w-[87vw]">
        <IoIosInformationCircleOutline size="18" className="mr-1" />
        <Text size="2">
          다양한 시간에 걸쳐 진행되는 경우, ‘이벤트 정보’에 별도로 입력해주세요.
        </Text>
      </Flex>
    </Flex>
  );
};

export default EventTimeWrapper;
