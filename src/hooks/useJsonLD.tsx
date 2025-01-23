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
    ],
    logo: `${DOMAIN}/logo.png`,
  };

  const jsonLD = { ...defaultJson, ...rest };

  return jsonLD;
};

export default useJsonLD;
