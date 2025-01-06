import { Box, TextField } from '@radix-ui/themes';
import type React from 'react';

import ChipListInput from '@/components/ui/ChipListInput';
import { cn } from '@/lib/utils';

export type FieldType = 'input' | 'chip';

interface BaseProps {
  label?: string;
  isRequired?: boolean;
  wrapperClassName?: string;
  innerProps?: React.ComponentProps<typeof Box>;
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
  const { label, isRequired, fieldType, wrapperClassName, innerProps } = props;

  const renderField = () => {
    if (fieldType === 'input') {
      return (
        <TextField.Root
          variant="soft"
          className="bg-tx-gray-50 text-tx-gray-10 input-text-light"
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
        'flex flex-col px-6 py-2 border rounded-md bg-tx-gray-50',
        wrapperClassName
      )}
    >
      {label && (
        <label className="text-tx-gray-10">
          {label}
          {isRequired && <span className="text-red-400"> *</span>}
        </label>
      )}

      <Box {...innerProps}>{renderField()}</Box>
    </div>
  );
};

export default InputField;
