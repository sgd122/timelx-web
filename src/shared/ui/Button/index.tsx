import { Button as RadixButton } from '@radix-ui/themes';
import type { ComponentProps, ForwardedRef } from 'react';
import { forwardRef } from 'react';

import type { LogParameters } from '@/shared/types/log';
import { LogClick } from '@/shared/ui/LogClick';
import { getInnerTextOfReactNode } from '@/shared/utils/getInnerTextOfReactNode';

interface Props extends ComponentProps<typeof RadixButton> {
  logParams?: LogParameters;
}

const ButtonComponent = (
  { logParams, ...props }: Props,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  return (
    <LogClick
      params={{
        ...logParams,
        button: getInnerTextOfReactNode(props.children),
      }}
    >
      <RadixButton ref={ref} {...props} />
    </LogClick>
  );
};

const Button = forwardRef(ButtonComponent);

export default Button;
