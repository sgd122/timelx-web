import { Box, Text, TextField } from '@radix-ui/themes';
import type React from 'react';

import ChipListInput from '@/components/ui/ChipListInput';
import { cn } from '@/lib/utils';

export type FieldType = 'input' | 'chip';

interface BaseProps {
  label?: string;
  isRequired?: boolean;
  wrapperClassName?: string;
  icon?: React.ReactNode;
  innerProps?: React.ComponentProps<typeof Box>;
  variant?: 'light' | 'dark';
}

type InputFieldProps =
  | (BaseProps & {
      fieldType: 'input';
      inputProps?: React.ComponentProps<typeof TextField.Root>;
    })
  | (BaseProps & {
      fieldType: 'chip';
      chipProps?: React.ComponentProps<typeof ChipListInput>;
    });

/**
 * @example
 * ```tsx
 * <InputField
 *   fieldType={'input'}
 *   inputProps={{ placeholder: 'placeholder 설명하기!' }}
 *   label={'label'}
 *   isRequired={true}
 * />
 *
 * <InputField
 *   fieldType={'chip'}
 *   chipProps={{ placeholder: 'placeholder 설명하기!' }}
 *   label={'label'}
 *   isRequired={true}
 * />
 * ```
 */

const InputField: React.FC<InputFieldProps> = (props) => {
  const {
    label,
    isRequired,
    fieldType,
    icon,
    wrapperClassName,
    innerProps,
    variant = 'light',
  } = props;

  const theme = {
    light: {
      text: 'text-tx-gray-10',
      bg: 'bg-tx-gray-50',
    },
    dark: {
      text: 'text-tx-gray-50',
      bg: 'bg-accent',
    },
  };

  const renderField = () => {
    if (fieldType === 'input') {
      return (
        <TextField.Root
          variant="soft"
          className={cn(
            variant === 'light' &&
              `${theme.light.bg} ${theme.light.text} input-text-light`,
            variant === 'dark' &&
              `${theme.dark.bg} ${theme.dark.text} input-text-dark`
          )}
          {...props.inputProps}
        />
      );
    } else if (fieldType === 'chip') {
      return <ChipListInput {...props.chipProps} />;
    }
    return null;
  };

  return (
    <div
      className={cn(
        'relative flex flex-col px-6 py-2',
        'border rounded-md',
        variant === 'light' && theme.light.bg,
        variant === 'dark' && theme.dark.bg,
        wrapperClassName
      )}
    >
      {label && (
        <label
          className={cn(
            variant === 'light' && theme.light.text,
            variant === 'dark' && theme.dark.text
          )}
        >
          <Text size="2">{label}</Text>
          {isRequired && <span className="text-red-400"> *</span>}
        </label>
      )}

      <Box className={icon ? 'w-full pr-4' : ''} {...innerProps}>
        {renderField()}
      </Box>

      {icon && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center">
          {icon}
        </div>
      )}
    </div>
  );
};

export default InputField;
