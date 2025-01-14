import { Box, Text } from '@radix-ui/themes';
import type { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

export interface FieldWrapperProps extends PropsWithChildren {
  label?: string;
  isRequired?: boolean;
  wrapperClassName?: string;
  icon?: React.ReactNode;
  innerProps?: React.ComponentProps<typeof Box>;
  variant?: 'light' | 'dark';
}

const FieldWrapper: React.FC<FieldWrapperProps> = ({
  label,
  icon,
  isRequired,
  wrapperClassName,
  innerProps,
  variant,
  children,
}) => {
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
        {children}
      </Box>

      {icon && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center">
          {icon}
        </div>
      )}
    </div>
  );
};

export default FieldWrapper;
