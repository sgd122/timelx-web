import { Box, Text } from '@radix-ui/themes';
import type { FieldError, FieldPath, FieldValues } from 'react-hook-form';

import { useRegister } from '@/components/providers/RegisterProvider';
import type { FieldType } from '@/components/ui/InputField';
import InputField from '@/components/ui/InputField';
import ErrorField from '@/views/event-new/_components/ErrorField';

interface EventDetailProps<TFieldValues extends FieldValues> {
  title?: string;
  label?: string;
  name: FieldPath<TFieldValues>; // 특정 필드 이름만 허용
  error?: FieldError;
  fieldType?: FieldType;
  isRequired: boolean;
  placeholder?: string;
}

const EventDetail = <TFieldValues extends FieldValues>({
  title,
  label,
  name,
  fieldType = 'input',
  error,
  isRequired,
  placeholder,
}: Omit<EventDetailProps<TFieldValues>, 'register'>) => {
  const register = useRegister<TFieldValues>();

  return (
    <Box className="flex flex-col gap-1.5">
      {title && (
        <Text size="2">
          {title}
          {isRequired && <span className="text-red-400"> *</span>}
        </Text>
      )}
      <InputField
        label={label}
        fieldType={fieldType}
        inputProps={{
          ...register(name),
          placeholder: placeholder,
        }}
        textareaProps={{
          ...register(name),
          placeholder: placeholder,
        }}
        chipProps={{
          wrapperClassName: 'bg-transparent border-none outline-none',
          ...register(name),
          placeholder: placeholder,
        }}
        variant="dark"
      />
      {error && <ErrorField fieldName={error} />}
    </Box>
  );
};

export default EventDetail;
