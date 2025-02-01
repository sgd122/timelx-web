import { Flex, Text } from '@radix-ui/themes';
import type { UseFormReturn } from 'react-hook-form';

import { detailFieldsSection1 } from '@/features/event/constants/fieldDefinitions';
import type { FormValues } from '@/features/event/types/form-values';
import { renderEventDetails } from '@/features/event/utils/renderEventDetails';

interface EventDateWrapperProps {
  isReadOnly: boolean;
  form: Pick<UseFormReturn<FormValues>, 'getValues' | 'formState'>;
}
const EventDateWrapper: React.FC<EventDateWrapperProps> = ({
  isReadOnly,
  form,
}) => {
  const { getValues, formState } = form;
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
          {renderEventDetails({
            fields: detailFieldsSection1,
            form: { formState, getValues },
            isReadOnly,
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default EventDateWrapper;
