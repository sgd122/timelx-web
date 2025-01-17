import { Box, Text } from '@radix-ui/themes';
import type {
  FieldError,
  FieldErrors,
  FieldPath,
  FieldValues,
} from 'react-hook-form';

import { useRegister } from '@/components/providers/RegisterProvider';
import type { FieldType } from '@/components/ui/InputField';
import InputField from '@/components/ui/InputField';
import type { InputType } from '@/types/input-type';
import ErrorField from '@/views/event-edit/_components/ErrorField';

interface EventDetailProps<TFieldValues extends FieldValues> {
  title?: string;
  label?: string;
  name: FieldPath<TFieldValues>; // 특정 필드 이름만 허용
  error?: FieldErrors<TFieldValues>;
  fieldType?: FieldType;
  isRequired: boolean;
  placeholder?: string;
  type?: InputType;
}

const EventDetail = <TFieldValues extends FieldValues>({
  title,
  label,
  name,
  fieldType = 'input',
  error,
  isRequired,
  placeholder,
  type,
}: Omit<EventDetailProps<TFieldValues>, 'register'>) => {
  const register = useRegister<TFieldValues>();

  return (
    <Box className="flex flex-col gap-1.5 w-full">
      {title && (
        <Text size="2">
          {title}
          {isRequired && <span className="text-red-400"> *</span>}
        </Text>
      )}
      <InputField
        wrapperClassName="w-full"
        label={label}
        fieldType={fieldType}
        inputProps={{
          ...register(name),
          placeholder: placeholder,
          type,
        }}
        textareaProps={{
          ...register(name),
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
