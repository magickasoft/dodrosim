import React from 'react';
import Head from "next/head";
import SC from 'styled-components';
import {Page} from '../../components';
import { maxDevice } from '../../theme';


const Content = SC.div``;

export default function bidding() {
  return (
    <div className="wrapper">
      <Head>
        <title>Торги</title>
        <meta property="og:title" content="Торги" />
        <meta property="og:description" content="Торги" />
        <meta property="og:url" content="https://site.com/about" />
        <meta property="og:image" content="/images/og/im_2.png" key="og:image" />
        <meta property="twitter:image" content="/images/og/im_2.png" key="twitter:image" />
        <meta property="twitter:title" content="Торги" />
        <meta property="twitter:description" content="Торги" />
        <meta property="twitter:url" content="https://site.com/about" />
        <meta name="description" content="Торги" />
      </Head>
      <Page
        label="Торги"
        text="Федеральное государственное бюджетное учреждение «Дирекция по обеспечению деятельности Федерального агентства по управлению государственным имуществом» (ОГРН 1187746840423,  ИНН 7722467407), на основании распоряжения Правительства Российской Федерации от 24.01.2018 № 75-р было преобразовано из Федерального государственного унитарного предприятия «Авторемонтный центр Мингосимущества России» (ОГРН 1027739280470, ИНН 7722011854)."
      >
        ---
      </Page>
    </div>
  );
}
