import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

import type theme from '@/lib/theme';
import { utils } from '@/styles/utils';

type Theme = typeof theme;

const style = (theme: Theme) => css`
  ${emotionReset}
  ${utils}

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  html, body, #__next { 
    height: 100%;
  }

  body {
    font-family: Pretendard, Noto Serif KR, Malgun Gothic, Helvetica Neue, sans-serif;
  }

  #__next {
    display: flex;
    flex-direction: column;
  }

  .container {
    // max-width: ;
    margin: 0 auto;
  }

  .content {
    display: flex;
    flex-direction: column;
    // row-gap: ;
  }

  .content-padding {
    // padding: 0 spacing30;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  input::-webkit-inner-spin-button {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }


  a, input, textarea, button {
    font-family: inherit;
  }

  strong, b {
    font-weight: bold;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  button {
    border: 0;
    outline: 0;
    background-color: transparent;
    cursor: pointer;
    margin: 0;
  }
`;

export { style };
