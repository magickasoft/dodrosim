import React from 'react';
import SC from 'styled-components';
import {HeaderLogo} from './logo';
import {NavLink} from './navLink';

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

export const Header = () => (
  <Container>
    <HeaderLogo />
    <div>
      <NavLink href="/services" name="Услуги" />
      <NavLink href="/objects" name="Объекты" />
      <NavLink href="/about" name="Об учреждении" />
      <NavLink href="/contacts" name="Контакты" />
    </div>
  </Container>
);
