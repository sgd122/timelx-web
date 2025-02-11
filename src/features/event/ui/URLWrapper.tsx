import { Flex, Text } from '@radix-ui/themes';
import Link from 'next/link';
import type { UseFormReturn } from 'react-hook-form';

import { detailFieldsSection4 } from '@/features/event/constants/fieldDefinitions';
import type { FormValues } from '@/features/event/types/form-values';
import { renderEventDetails } from '@/features/event/utils/renderEventDetails';

interface URLWrapperProps {
  isReadOnly: boolean;
  form: Pick<UseFormReturn<FormValues>, 'getValues' | 'formState'>;
}
const URLWrapper: React.FC<URLWrapperProps> = ({ isReadOnly, form }) => {
  const { getValues } = form;

  const urlValues: string[] = [];
  const hasData = detailFieldsSection4.some((field) =>
    getValues(field.value as keyof FormValues)
  );
  detailFieldsSection4.map((field) => {
    const _value = getValues(field.value as keyof FormValues) as string;
    urlValues.push(_value);
  });

  const isExternalLink =
    urlValues[1]?.startsWith('http://') || urlValues[1]?.startsWith('https://');

  if (isReadOnly && !hasData) return null; // ✅ 값이 없으면 렌더링하지 않음
  if (isReadOnly) {
    return (
      <Flex direction="column" className="gap-1">
        <Text size="2">
          <h3>링크</h3>
        </Text>

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

  return renderEventDetails({
    fields: detailFieldsSection4,
    form,
    isReadOnly,
  });
};

export default URLWrapper;
