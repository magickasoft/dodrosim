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
      <Content>
        Торги
      </Content>
    </div>
  );
}
