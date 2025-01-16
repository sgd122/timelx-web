import { Box, Text } from '@radix-ui/themes';
import { isEmpty } from 'lodash-es';

import ChipList from '@/components/ui/ChipList';
import type { FieldType } from '@/components/ui/InputField';
import InputField from '@/components/ui/InputField';

interface EventDetailProps {
  label: string;
  value: string | string[];
  fieldType?: FieldType;
  isReadOnly?: boolean;
}

const EventDetail = ({
  label,
  value,
  fieldType = 'input',
  isReadOnly = true,
}: EventDetailProps) => {
  if (isEmpty(value)) return null;
  if (fieldType === 'chip') return <ChipList labels={value as string[]} />;

  return (
    <Box className="flex flex-col gap-1.5 w-full">
      <Text size="2" className="w-fit">
        {label}
      </Text>
      <InputField
        fieldType={fieldType}
        inputProps={{ readOnly: isReadOnly, value: value as string }}
        textareaProps={{ readOnly: isReadOnly, value: value as string }}
        variant="dark"
      />
    </Box>
  );
};

export default EventDetail;
