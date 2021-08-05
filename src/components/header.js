import React from 'react';
import SC from 'styled-components';
import Link from "next/link";
import {Logo} from './logo';

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

const Item = SC.a`
  padding: 22px 0;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  text-align: right;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #008E5B;
  margin: 0 20px 0 0;
  &:hover {
    color: #333E66;
    border-bottom: #333E66;
    border-bottom-width: 1px;
    border-bottom-style: solid;
  }
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
      <Link href="/services" passHref>
        <Item>Услуги</Item>
      </Link>
      <Link href="/objects" passHref>
        <Item>Объекты</Item>
      </Link>
      <Link href="/about" passHref>
        <Item >Об учреждении</Item>
      </Link>
      <Link href="/contacts" passHref>
        <Item>Контакты</Item>
      </Link>
    </Content>
  </Container>
);
