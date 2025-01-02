import styled from '@emotion/styled';
import { Container } from '@radix-ui/themes';

import { LAYOUT } from '@/constants/size';

const maxWidthMinusOne = `calc(${LAYOUT.maxWidth} - 1px)`;

export const LeftContainer = styled(Container)`
  @media (max-width: ${maxWidthMinusOne}) {
    display: none;
  }
`;

export const RightContainer = styled(Container)`
  align-items: center;

  @media (min-width: ${LAYOUT.maxWidth}) {
    align-items: flex-end;
  }
`;
