declare module '@seo' {
  import { NextSeoProps } from 'next-seo';

  export interface JsonLDProps {
    context: string;
    type: string;
    url: string;
    name: string;
    contactPoint: { type: string; telephone: string; contactType: string };
    sameAs: string[];
    logo: string;
  }

  export interface SeoProps {
    nextSeoProps?: NextSeoProps;
    jsonLDProps?: JsonLDProps;
  }
}
