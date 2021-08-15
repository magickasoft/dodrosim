import React  from 'react';
import Head from "next/head";
import { useRouter } from 'next/router';
import SC from 'styled-components';
import { Page } from '../../components';

const Content = SC.div`
  margin: 45px 0;
  display: flex;
  flex-wrap: wrap;
`;

const Header = SC.div`
  margin: 25px 0;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
  color: #000000;
`;

export default function News() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>Новости</title>
        <meta property="og:title" content="Новости" />
        <meta property="og:description" content="Новости" />
        <meta property="og:url" content="https://site.com/about" />
        <meta property="og:image" content="/images/og/im_2.png" key="og:image" />
        <meta property="twitter:image" content="/images/og/im_2.png" key="twitter:image" />
        <meta property="twitter:title" content="Новости" />
        <meta property="twitter:description" content="Новости" />
        <meta property="twitter:url" content="https://site.com/about" />
        <meta name="description" content="Новости" />
      </Head>
      <Page label="Новости">
        IIDDDD {id}
      </Page>
    </>
  );
}
