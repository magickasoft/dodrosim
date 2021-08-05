import Head from "next/head";
import SC from 'styled-components';

const Content = SC.div`
  color: #000;
  background: #fff;
  height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function contacts() {
  return (
    <div className="wrapper">
      <Head>
        <title>Контакты</title>
        <meta property="og:title" content="Контакты" />
        <meta property="og:description" content="Контакты" />
        <meta property="og:url" content="https://site.com/about" />
        <meta property="og:image" content="/images/og/im_2.png" key="og:image" />
        <meta property="twitter:image" content="/images/og/im_2.png" key="twitter:image" />
        <meta property="twitter:title" content="Контакты" />
        <meta property="twitter:description" content="Контакты" />
        <meta property="twitter:url" content="https://site.com/about" />
        <meta name="description" content="Контакты" />
      </Head>
      <Content>
        Контакты
      </Content>
    </div>
  );
}
