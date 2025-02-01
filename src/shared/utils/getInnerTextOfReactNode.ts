import type { ReactElement, ReactNode } from 'react';

export const getInnerTextOfReactNode = (node: ReactNode): string => {
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return node.toString();
  if (Array.isArray(node)) return node.map(getInnerTextOfReactNode).join('');

  // ✅ `node`가 `ReactElement<{ children?: ReactNode }>`인지 확인 후 타입 단언
  if (node && typeof node === 'object' && 'props' in node) {
    const element = node as ReactElement<{ children?: ReactNode }>;
    return getInnerTextOfReactNode(element.props.children);
  }

  return '';
};
