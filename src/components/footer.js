import React from 'react';
import SC from 'styled-components';
import {Logo} from './logo';

import { maxDevice } from '../theme';
import Link from 'next/link';

const Container = SC.footer`
  background: #F2F4FA;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 38px 140px 38px 140px;
  @media ${maxDevice.tablet} {
    padding: 38px 30px 38px 30px;
  }
  @media ${maxDevice.mobileL} {
    padding: 38px 30px 38px 30px;
  }
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

const Contacts = SC.div``;

const Links = SC.div`
  display: flex;
  flex-direction: row;
  @media ${maxDevice.mobileS} {
    flex-direction: column;
    align-self: flex-start;
  }
`;

const Copyright = SC.div`
  margin: 17px 0 34px 0;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  color: #777777;
`;

const Content = SC.div`
  display: flex;
  align-items: flex-start;
  @media ${maxDevice.mobileL} {
    flex-direction: column;
  }
`;

const Block = SC.div`
  width: 180px;
`;

const Text = SC.div`
  margin-bottom: 5px;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
`;

const InfoContainer = SC.div`
  margin: 15px 0;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  color: #777777;
`;

const InfoLabel = SC.div`
  font-style: normal;
  font-weight: bold;
  font-size: 8px;
  line-height: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #777777;
`;

const Info = ({ label, children }) => (
  <InfoContainer>
    {label && <InfoLabel>{label}</InfoLabel>}
    {children}
  </InfoContainer>
);

const InfoBigContainer = SC.div`
  margin: 17px 0 34px ;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  color: #777777;
`;

const InfoBigLabel = SC.div`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 25px;
  color: #777777;
  margin-bottom: 20px;
`;

const InfoBig = ({ label, children }) => (
  <InfoBigContainer>
    {label && <InfoBigLabel>{label}</InfoBigLabel>}
    {children}
  </InfoBigContainer>
);

export const Footer = () => (
  <Container>
    <Contacts>
      <Logo signColor="#777777" color="#777777" />
      <Copyright>© {new Date().getFullYear()} ФГБУ «Дирекция по обеспечению деятельности ФАУГИ»</Copyright>
      <Content>
        <Block>
          <Info label="Телефоны">
            <div>+7 (495) 361-45-21</div>
            <div>+7 (495) 361-45-18</div>
          </Info>
          <Info label="Факс">
            <div>+7 (495) 361-45-21</div>
          </Info>
          <Info label="Электронная почта">
            <a href='mailto:info@dodrosim.ru'>info@dodrosim.ru</a>
          </Info>
        </Block>
        <Block>
          <Info label="Адрес">
            <div>111024, Москва, проезд Завода Серп  и Молот, д. 5, стр.</div>
          </Info>
          <Info label="Режим работы">
            <div>Пн — Пт с 9:00 до 18:00</div>
          </Info>
        </Block>
      </Content>
    </Contacts>
    <Links>
      <InfoBig label="Информация">
        <Text>
          <Link href="/about" passHref>
            <a>Об учреждении</a>
          </Link>
        </Text>
        <Text>
          <Link href="/services" passHref>
            <a>Услуги</a>
          </Link>
        </Text>
        <Text>
          <Link href="/objects" passHref>
            <a>Объекты</a>
          </Link>
        </Text>
        <Text>
          <Link href="/bidding" passHref>
            <a>Торги</a>
          </Link>
        </Text>
        <Text>
          <Link href="/documents" passHref>
            <a>Документы</a>
          </Link>
        </Text>
        <Text>
          <Link href="/news" passHref>
            <a>Новости</a>
          </Link>
        </Text>
        <Text>
          <Link href="/contacts" passHref>
            <a>Контакты</a>
          </Link>
        </Text>
        <Text>
          <Link href="/about#corruption" passHref>
            <a>Противодействие коррупции</a>
          </Link>
        </Text>
        <Text>
          <Link href="/vacancies" passHref>
            <a>Вакансии</a>
          </Link>
        </Text>
      </InfoBig>
      <InfoBig label="Сайты">
        <Text>
          <Link href="/about" passHref>
            <a>Росимущество</a>
          </Link>
        </Text>
        <Text>
          <Link href="/services" passHref>
            <a>Реестр закупок</a>
          </Link>
        </Text>
        <Text>
          <Link href="/objects" passHref>
            <a>Реестр торгов</a>
          </Link>
        </Text>
        <Text>
          <Link href="/contacts" passHref>
            <a>Реестр Федерального имущества</a>
          </Link>
        </Text>
      </InfoBig>
    </Links>
  </Container>
);
