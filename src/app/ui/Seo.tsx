import type { SeoProps } from '@seo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { DefaultSeo, NextSeo } from 'next-seo';

import { DOMAIN_NAME } from '@/shared/constants/url';
import useDefaultSeo from '@/shared/hooks/useDefaultSeo';
import useJsonLD from '@/shared/hooks/useJsonLD';

interface Props {
  seo?: SeoProps;
}

const Seo = ({ seo }: Props) => {
  const defaultSeo = useDefaultSeo();
  const { nextSeoProps, jsonLDProps } = seo ?? {};
  const jsonLD = useJsonLD(jsonLDProps);
  const { pathname } = useRouter();

  return (
    <>
      {seo ? (
        <NextSeo
          {...defaultSeo}
          titleTemplate={
            pathname === '/event/[eventId]' ||
            pathname === '/event/[eventId]/edit'
              ? nextSeoProps?.title
              : defaultSeo.titleTemplate
          }
          title={nextSeoProps?.title}
          description={nextSeoProps?.description || defaultSeo.description}
          openGraph={{
            ...defaultSeo.openGraph,
            ...nextSeoProps?.openGraph,
            title: `${DOMAIN_NAME} | ${nextSeoProps?.title}`,
            description: nextSeoProps?.description || defaultSeo.description,
          }}
        />
      ) : (
        <DefaultSeo {...defaultSeo} />
      )}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
        />
      </Head>
    </>
  );
};

export default Seo;
