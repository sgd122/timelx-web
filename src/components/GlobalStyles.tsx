import { Global, ThemeProvider } from '@emotion/react';
import { Theme, ThemePanel } from '@radix-ui/themes';
import type { PropsWithChildren } from 'react';

import theme from '@/lib/theme';
import { style } from '@/styles/globals';

import '@radix-ui/themes/styles.css';

const GlobalStyles = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Theme
        accentColor="blue"
        grayColor="sand"
        radius="large"
        scaling="100%"
        appearance="dark"
      >
        <ThemePanel />
        <Global styles={style(theme)} />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Theme>
    </>
  );
};

export default GlobalStyles;
