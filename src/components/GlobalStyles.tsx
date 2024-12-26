import { Global, ThemeProvider } from '@emotion/react';
import type { PropsWithChildren } from 'react';

import theme from '@/lib/theme';
import { style } from '@/styles/globals';

const GlobalStyles = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Global styles={style(theme)} />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default GlobalStyles;
