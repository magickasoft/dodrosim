import React from 'react';
import SC from 'styled-components';
import Link from 'next/link';

import { device } from '../theme';

const Container = SC.footer`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  filter: drop-shadow(0px 0px 20px rgba(51, 62, 102, 0.1)) drop-shadow(0px 0px 40px rgba(51, 62, 102, 0.05));
`;

const Grid = SC.div`

`;

export const Header = () => (
  <Container>
    d sdf sdf
  </Container>
);
