import Head from "next/head";
import SC from 'styled-components';
import {Page} from '../../components';
import React from 'react';

const Content = SC.div``;

export default function services() {
  return (
    <>
      <Head>
        <title>Услуги</title>
        <meta property="og:title" content="Услуги" />
        <meta property="og:description" content="Услуги" />
        <meta property="og:url" content="https://site.com/about" />
        <meta property="og:image" content="/images/og/im_2.png" key="og:image" />
        <meta property="twitter:image" content="/images/og/im_2.png" key="twitter:image" />
        <meta property="twitter:title" content="Услуги" />
        <meta property="twitter:description" content="Услуги" />
        <meta property="twitter:url" content="https://site.com/about" />
        <meta name="description" content="Услуги" />
      </Head>
      <Page label="Услуги">
        ---
      </Page>
    </>
  );
}
