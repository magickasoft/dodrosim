import React from 'react';
import Head from "next/head";
import { useRouter } from 'next/router';
import SC from 'styled-components';
import { Page } from '../../components';

const Content = SC.div`
  margin: 45px 0;
  display: flex;
  flex-wrap: wrap;
`;

export default function Vacancies() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
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
      <Page label="Заместитель руководителя">
        IIDDDD {id}
      </Page>
    </>
  );
}
