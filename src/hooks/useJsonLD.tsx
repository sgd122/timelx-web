import type { JsonLDProps } from '@seo';
import { useRouter } from 'next/router';

import { DOMAIN } from '@/constants/url';

const useJsonLD = (props?: JsonLDProps) => {
  const { context, type, contactPoint, ...rest } = props ?? {};
  const { locale, asPath } = useRouter();

  const defaultJson = {
    '@context': context || 'http://schema.org',
    '@type': type || 'Organization',
    url: `${DOMAIN}/${locale}${asPath}`,
    name: 'Timelx',
    contactPoint: {
      '@type': contactPoint?.type || 'ContactPoint',
      telephone: '+82-10-2361-6889',
      contactType: 'Customer service',
    },
    sameAs: [
      // 'https://play.google.com/store/apps/details?id=com.livinginhotel.app',
      // 'https://itunes.apple.com/app/id1658290368',
      // 'https://www.instagram.com/livinginhotel',
      // 'https://blog.naver.com/livinginhotel',
      // 'https://www.facebook.com/livinginhotel',
    ],
    logo: `${DOMAIN}/static/media/logo.346e8bbf41c83d6c4617e879ec540130.svg`,
  };

  const jsonLD = { ...defaultJson, ...rest };

  return jsonLD;
};

export default useJsonLD;
