import { Box, Text } from '@radix-ui/themes';
import { isEmpty } from 'lodash-es';
import type {
  FieldError,
  FieldErrors,
  FieldPath,
  FieldValues,
} from 'react-hook-form';

import { useRegister } from '@/components/providers/RegisterProvider';
import ChipList from '@/components/ui/ChipList';
import type { FieldType } from '@/components/ui/InputField';
import InputField from '@/components/ui/InputField';
import ErrorField from '@/services/eventService/components/ui/ErrorField';
import type { InputType } from '@/types/input-type';

interface EventDetailProps<TFieldValues extends FieldValues> {
  title?: string;
  label?: string;
  name: FieldPath<TFieldValues>; // 특정 필드 이름만 허용
  value?: TFieldValues[keyof TFieldValues];
  error?: FieldErrors<TFieldValues>;
  fieldType?: FieldType;
  isRequired: boolean;
  placeholder?: string;
  type?: InputType;
  isReadOnly?: boolean;
}

const EventDetail = <TFieldValues extends FieldValues>({
  title,
  label,
  name,
  value,
  fieldType = 'input',
  error,
  isRequired,
  placeholder,
  type,
  isReadOnly,
}: Omit<EventDetailProps<TFieldValues>, 'register'>) => {
  const register = useRegister<TFieldValues>();

  if (isEmpty(value)) return null;

  if (isReadOnly && fieldType === 'chip') {
    if (isEmpty(value)) return null;
    if (fieldType === 'chip') return <ChipList labels={value as string[]} />;
  }

  return (
    <Box className="flex flex-col gap-1.5 w-full">
      {title && (
        <Text size="2">
          {title}
          {isRequired && !isReadOnly && (
            <span className="text-red-400"> *</span>
          )}
        </Text>
      )}
      <InputField
        wrapperClassName="w-full"
        label={label}
        fieldType={fieldType}
        inputProps={{
          ...register(name),
          readOnly: isReadOnly,
          placeholder: placeholder,
          type,
        }}
        textareaProps={{
          ...register(name),
          readOnly: isReadOnly,
          placeholder: placeholder,
        }}
        chipProps={{
          wrapperClassName:
            'bg-transparent border-none outline-none focus-within:ring-0',
          ...register(name),
          placeholder: placeholder,
        }}
        variant="dark"
      />
      {error && <ErrorField fieldName={error as FieldError} />}
    </Box>
  );
};

export default EventDetail;
