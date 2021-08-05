import Head from "next/head";
import SC from 'styled-components';
import useScrollTop from "../../hooks/useScrollTop";

const Content = SC.div`
  color: #000;
  background: #fff;
  height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function services() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useScrollTop();

  return (
    <div className="wrapper">
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
      <Content>
        Услуги
      </Content>
    </div>
  );
}
