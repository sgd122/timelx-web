import type { JsonLDProps } from '@seo';

import { DOMAIN, DOMAIN_NAME } from '@/shared/constants/url';
import { useAppRouter } from '@/shared/hooks/useAppRouter';

const useJsonLD = (props?: JsonLDProps) => {
  const { context, type, contactPoint, ...rest } = props ?? {};
  const { locale, asPath } = useAppRouter();

  const defaultJson = {
    '@context': context || 'http://schema.org',
    '@type': type || 'Organization',
    url: `${DOMAIN}/${locale}${asPath}`,
    name: DOMAIN_NAME,
    contactPoint: {
      '@type': contactPoint?.type || 'ContactPoint',
      email: 'timelxers@gmail.com',
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
