import React from 'react';
import SC from 'styled-components';
import {Logo} from './logo';

const Container = SC.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Divider = SC.div`
  background: #777777;
  opacity: 0.2;
  width: 1px;
  height: 36px;
  margin: 0 15px;
`;

const Label = SC.div`
  width: 145px;
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
  line-height: 12px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #777777;
`;

export const HeaderLogo = () => (
  <Container>
    <Logo />
    <Divider />
    <Label>
      Дирекция по обеспечению деятельности ФАУГИ
    </Label>
  </Container>
);
