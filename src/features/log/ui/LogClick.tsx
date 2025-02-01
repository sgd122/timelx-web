import type { PropsWithChildren, ReactElement } from 'react';
import { Children, cloneElement, isValidElement } from 'react';

import { useLogger } from '@/features/log/hooks/useLogger';
import type { LogParameters } from '@/features/log/types/log';

interface LogClickProps {
  params: LogParameters;
}

export const LogClick = ({
  children,
  params,
}: PropsWithChildren<LogClickProps>) => {
  const logger = useLogger();
  const child = Children.only(children);

  // ✅ `child`가 ReactElement인지 안전하게 체크
  if (!isValidElement(child)) {
    console.warn('LogClick의 children은 ReactElement여야 합니다.');
    return null;
  }

  // ✅ props의 타입을 명확하게 지정하여 TypeScript 오류 해결
  const element = child as ReactElement<{
    onClick?: (...args: unknown[]) => void;
  }>;

  return cloneElement(element, {
    onClick: (...args: unknown[]) => {
      logger.click({ params });

      if (typeof element.props.onClick === 'function') {
        return element.props.onClick(...args);
      }
    },
  });
};
