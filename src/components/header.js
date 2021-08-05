import React from 'react';
import SC from 'styled-components';
import {Logo} from './logo';

import { device } from '../theme';

const Container = SC.header`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  filter: drop-shadow(0px 0px 20px rgba(51, 62, 102, 0.1)) drop-shadow(0px 0px 40px rgba(51, 62, 102, 0.05));
`;

export const Header = () => (
  <Container>
    <Logo />
  </Container>
);
