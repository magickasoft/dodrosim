import Head from "next/head";
import SC from 'styled-components';
import { maxDevice } from '../../theme';
import React from 'react';

const Container = SC.div`
  margin: 120px 140px 60px 140px;
  @media ${maxDevice.tablet} {
    margin: 120px 30px 60px 30px;
  }
  @media ${maxDevice.mobileL} {
    margin: 90px 30px 50px 30px;
  }
`;

const Header = SC.div`
  white-space: pre-line;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 48px;
  color: #000000;
  @media ${maxDevice.mobileL} {
    font-size: 30px;
    line-height: 36px;
  }
`;

const Text = SC.div`
  margin-top: 40px;
  white-space: pre-line;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #777777;
  max-width: 760px;
  @media ${maxDevice.mobileL} {
    margin-top: 30px;
  }
`;

export default function vacancies() {
  return (
    <div className="wrapper">
      <Head>
        <title>Торги</title>
        <meta property="og:title" content="Вакансии" />
        <meta property="og:description" content="Вакансии" />
        <meta property="og:url" content="https://site.com/about" />
        <meta property="og:image" content="/images/og/im_2.png" key="og:image" />
        <meta property="twitter:image" content="/images/og/im_2.png" key="twitter:image" />
        <meta property="twitter:title" content="Вакансии" />
        <meta property="twitter:description" content="Вакансии" />
        <meta property="twitter:url" content="https://site.com/about" />
        <meta name="description" content="Вакансии" />
      </Head>
      <Container>
        <Header>Вакансии</Header>
        <Text>
          Федеральное государственное бюджетное учреждение «Дирекция по обеспечению деятельности Федерального агентства по управлению государственным имуществом» (ОГРН 1187746840423,  ИНН 7722467407), на основании распоряжения Правительства Российской Федерации от 24.01.2018 № 75-р было преобразовано из Федерального государственного унитарного предприятия «Авторемонтный центр Мингосимущества России» (ОГРН 1027739280470, ИНН 7722011854).</Text>
      </Container>
    </div>
  );
}
