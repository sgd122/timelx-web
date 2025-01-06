import { Box, TextField } from '@radix-ui/themes';
import type React from 'react';

interface InputFieldProps
  extends React.ComponentPropsWithoutRef<typeof TextField.Root> {
  placeholder?: string;
  wrapperProps?: React.ComponentProps<typeof Box>;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  wrapperProps = {},
  ...props
}) => {
  return (
    <Box {...wrapperProps}>
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
