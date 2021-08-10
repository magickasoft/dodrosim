import React from 'react';
import Head from "next/head";
import SC from 'styled-components';
import { maxDevice } from '../../theme';
import {Page} from '../../components';

const Content = SC.div``;

export default function documents() {
  return (
    <div className="wrapper">
      <Head>
        <title>Торги</title>
        <meta property="og:title" content="Документы" />
        <meta property="og:description" content="Документы" />
        <meta property="og:url" content="https://site.com/about" />
        <meta property="og:image" content="/images/og/im_2.png" key="og:image" />
        <meta property="twitter:image" content="/images/og/im_2.png" key="twitter:image" />
        <meta property="twitter:title" content="Документы" />
        <meta property="twitter:description" content="Документы" />
        <meta property="twitter:url" content="https://site.com/about" />
        <meta name="description" content="Документы" />
      </Head>
      <Container>
        <Header>Документы</Header>
        <Text>
          Федеральное государственное бюджетное учреждение «Дирекция по обеспечению деятельности Федерального агентства по управлению государственным имуществом» (ОГРН 1187746840423,  ИНН 7722467407), на основании распоряжения Правительства Российской Федерации от 24.01.2018 № 75-р было преобразовано из Федерального государственного унитарного предприятия «Авторемонтный центр Мингосимущества России» (ОГРН 1027739280470, ИНН 7722011854).
        </Text>
      </Container>
    </div>
  );
}
