import React from 'react';
import SC from 'styled-components';
import {Logo} from './logo';
import {NavLink} from './navLink';

import { device } from '../theme';

const Container = SC.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 60px;
  filter: drop-shadow(0px 0px 20px rgba(51, 62, 102, 0.1)) drop-shadow(0px 0px 40px rgba(51, 62, 102, 0.05));
`;

const Content = SC.div`
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

export const Header = () => (
  <Container>
    <Content>
      <Logo />
      <Divider />
      <Label>
        Дирекция по обеспечению деятельности ФАУГИ
      </Label>
    </Content>
    <Content>
      <NavLink href="/services" name="Услуги" />
      <NavLink href="/objects" name="Объекты" />
      <NavLink href="/about" name="Об учреждении" />
      <NavLink href="/contacts" name="Контакты" />
    </Content>
  </Container>
);
