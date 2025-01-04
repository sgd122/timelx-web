import { Theme } from '@radix-ui/themes';
import type { PropsWithChildren } from 'react';

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
        {children}
        {/*NOTE: emotion 제거*/}
        {/*<Global styles={style(theme)} />*/}
        {/*<ThemeProvider theme={theme}>{children}</ThemeProvider>*/}
      </Theme>
    </>
  );
};

export default GlobalStyles;
