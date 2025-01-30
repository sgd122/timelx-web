import { Text } from '@radix-ui/themes';
import type { FieldError } from 'react-hook-form';
import { BiError } from 'react-icons/bi';

interface ErrorFieldProps {
  fieldName?: FieldError;
}
const ErrorField = ({ fieldName }: ErrorFieldProps) => {
  if (!fieldName) return null;
  return (
    <Text size="2" color="red" className="mt-1 flex items-center">
      <BiError size="16" className="mr-1" />
      {fieldName.message}
    </Text>
  );
};

export default ErrorField;
