import React from 'react';
import Head from "next/head";
import SC from 'styled-components';
import {Page, Card} from '../../components';

const Content = SC.div`
  margin: 45px 0;
  display: flex;
  flex-wrap: wrap;
`;

const items = [
  { label: 'Аренда имущества', href: '/vacancies' },
  { label: 'Список закупок', href: '/vacancies' },
  { label: 'План закупок (44-ФЗ)', href: '/vacancies' },
  { label: 'План закупок (223-ФЗ)', href: '/vacancies' },
  { label: 'Отчётность по договорам (223-ФЗ)', href: '/vacancies' },
  { label: 'Положение о закупках', href: '/vacancies' },
];

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
        <Content>
          {items.map(i => <Card key={i.label} {...i} />)}
        </Content>
      </Page>
    </div>
  );
}
