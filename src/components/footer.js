import React from 'react';
import SC from 'styled-components';
import {Logo} from './logo';

import { device } from '../theme';

const Container = SC.footer`
  margin-top: 200px;
  background: #F2F4FA;
  padding: 38px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Grid = SC.div`

`;

export const Footer = () => (
  <Container>
    <Logo signColor="#777777" color="#777777" />
  </Container>
);
