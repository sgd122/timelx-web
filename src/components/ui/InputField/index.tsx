import { TextArea, TextField } from '@radix-ui/themes';
import type React from 'react';

import ChipListInput from '@/components/ui/ChipListInput';
import type { FieldWrapperProps } from '@/components/ui/FieldWrapper';
import FieldWrapper from '@/components/ui/FieldWrapper';
import { cn } from '@/lib/utils';

export type FieldType = 'input' | 'chip' | 'textarea';

type BaseProps = Omit<FieldWrapperProps, 'children'>;

type InputFieldProps =
  | (BaseProps & {
      fieldType: 'input';
      inputProps?: React.ComponentProps<typeof TextField.Root>;
    })
  | (BaseProps & {
      fieldType: 'chip';
      chipProps?: React.ComponentProps<typeof ChipListInput>;
    })
  | (BaseProps & {
      fieldType: 'textarea';
      textareaProps?: React.ComponentProps<typeof TextArea>;
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
    } else if (fieldType === 'textarea') {
      return (
        <TextArea
          rows={20}
          className={cn(
            'bg-none shadow-none',
            variant === 'light' &&
              `${theme.light.bg} ${theme.light.text} input-text-light`,
            variant === 'dark' &&
              `${theme.dark.bg} ${theme.dark.text} input-text-dark`
          )}
          placeholder="Reply to comment…"
          {...props.textareaProps}
        />
      );
    }
    return null;
  };

  return (
    <FieldWrapper
      label={label}
      icon={icon}
      isRequired={isRequired}
      wrapperClassName={wrapperClassName}
      variant={variant}
      innerProps={innerProps}
    >
      {renderField()}
    </FieldWrapper>
  );
};

export default InputField;
