import type { DefaultSeoProps } from 'next-seo';

import { S3_URL } from '@/config';
import { DOMAIN, DOMAIN_NAME } from '@/shared/constants/url';
import { useAppRouter } from '@/shared/hooks/useAppRouter';

const useDefaultSeo = (): DefaultSeoProps => {
  const { asPath, locale } = useAppRouter();
  const defaultTitle = DOMAIN_NAME;
  const titleTemplate = `${DOMAIN_NAME} %s`;
  const siteName = DOMAIN_NAME;
  const description =
    '가까운 곳에서 만나는 놀라운 시간. 공연, 전시, 축제 등 다양한 이벤트를 발견하고 특별한 경험을 시작하세요.';
  const canonical = `${DOMAIN}${asPath}`;

  const openGraph = {
    type: 'website',
    url: canonical,
    title: defaultTitle,
    description,
    images: [
      {
        url: `${S3_URL}/next/og/og-image.png`,
        width: 300,
        height: 157,
        alt: DOMAIN_NAME,
      },
    ],
    locale,
    siteName,
  };

  return {
    defaultTitle,
    titleTemplate,
    description,
    canonical,
    openGraph,
  };
};

export default useDefaultSeo;
