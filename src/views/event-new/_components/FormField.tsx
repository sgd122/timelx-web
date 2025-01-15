import type {
  FieldError,
  FieldPath,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form';

import InputField from '@/components/ui/InputField';
import ErrorField from '@/views/event-new/_components/ErrorField';

interface FormFieldProps<TFieldValues extends FieldValues> {
  name: FieldPath<TFieldValues>; // 특정 필드 이름만 허용
  placeholder: string;
  register: UseFormRegister<TFieldValues>;
  error?: FieldError;
}

const FormField = <TFieldValues extends FieldValues>({
  name,
  placeholder,
  register,
  error,
}: FormFieldProps<TFieldValues>) => {
  return (
    <>
      <InputField
        fieldType="input"
        inputProps={{
          ...register(name), // 명확한 타입 지정
          placeholder,
        }}
        variant="dark"
      />
      {error && <ErrorField fieldName={error} />}
    </>
  );
};

export default FormField;
