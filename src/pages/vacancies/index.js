import React from 'react';
import Head from "next/head";
import SC from 'styled-components';
import { Page, VacancyCard } from '../../components';

const Content = SC.div`
  margin: 45px 0;
  display: flex;
  flex-wrap: wrap;
`;

const items = [
  { label: 'Заместитель руководителя', category: 'Менеджмент', href: '/vacancies' },
  { label: 'Ведущий программист на Pyton', category: 'IT', href: '/vacancies' },
  { label: 'Заведующий отдела закупок', category: 'Менеджмент', href: '/vacancies' },
];

export default function vacancies() {
  return (
    <div className="wrapper">
      <Head>
        <title>Вакансии</title>
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
      <Page
        label="Вакансии"
        text="Федеральное государственное бюджетное учреждение «Дирекция по обеспечению деятельности Федерального агентства по управлению государственным имуществом» (ОГРН 1187746840423,  ИНН 7722467407), на основании распоряжения Правительства Российской Федерации от 24.01.2018 № 75-р было преобразовано из Федерального государственного унитарного предприятия «Авторемонтный центр Мингосимущества России» (ОГРН 1027739280470, ИНН 7722011854)."
      >
        <Content>
          {items.map(i => <VacancyCard key={i.label} {...i} />)}
        </Content>
      </Page>
    </div>
  );
}
