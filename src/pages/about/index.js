import React from 'react';
import Head from "next/head";
import SC from 'styled-components';
import {Page} from '../../components';
import { maxDevice } from '../../theme';

const Content = SC.div``;

export default function about() {
  return (
    <div className="wrapper">
      <Head>
        <title>Об учреждении</title>
        <meta property="og:title" content="Об учреждении" />
        <meta property="og:description" content="Об учреждении" />
        <meta property="og:url" content="https://site.com/about" />
        <meta property="og:image" content="/images/og/im_2.png" key="og:image" />
        <meta property="twitter:image" content="/images/og/im_2.png" key="twitter:image" />
        <meta property="twitter:title" content="Об учреждении" />
        <meta property="twitter:description" content="Об учреждении" />
        <meta property="twitter:url" content="https://site.com/about" />
        <meta name="description" content="Об учреждении" />
      </Head>
      <Page label="Об учреждении">
        ---
      </Page>
    </div>
  );
}
