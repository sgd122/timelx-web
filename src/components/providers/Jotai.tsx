import { Provider } from 'jotai';
import type { PropsWithChildren } from 'react';

const JotaiProvider = ({ children }: PropsWithChildren) => {
  return <Provider>{children}</Provider>;
};

export default JotaiProvider;
