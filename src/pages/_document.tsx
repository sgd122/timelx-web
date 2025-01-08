import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => (
  <Html lang="ko">
    <Head>
      <link
        rel="preload"
        as="style"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard-dynamic-subset.css"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        as="style"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard-dynamic-subset.css"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
