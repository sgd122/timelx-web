import { Box, TextField } from '@radix-ui/themes';
import type React from 'react';

interface InputFieldProps
  extends React.ComponentPropsWithoutRef<typeof TextField.Root> {
  placeholder?: string;
  maxWidth?: string;
  wrapperClassName?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  maxWidth = '170px',
  wrapperClassName,
  ...props
}) => {
  return (
    <Box maxWidth={maxWidth} className={wrapperClassName}>
      <TextField.Root
        placeholder={placeholder}
        variant="soft"
        className="bg-tx-gray-50 text-tx-gray-10 input-text-light"
        {...props}
      />
    </Box>
  );
};

export default InputField;
