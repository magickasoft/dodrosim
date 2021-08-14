import React, { Fragment } from 'react';
import Head from "next/head";
import SC from 'styled-components';
import { Accordion, Page, PersonRow } from '../../components';
import { minDevice } from '../../theme';

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

const items = [
  { name: 'Дзиковский Андрей Сергеевич', position: 'Директор'},
  { name: 'Сазонов Илья Викторович', position: 'Заместитель директора'},
  { name: 'Ионочкин Алексей Иванович', position: 'Заместитель директора'},
  { name: 'Гераськин Александр Викторович', position: 'Заместитель директора'},
  { name: 'Скворцов Виталий Александрович', position: 'Заместитель директора'},
  { name: 'Чебров Роман Андреевич', position: 'Начальник управления гармонизации сведений'},
  { name: 'Середа Дмитрий Сергеевич', position: 'Советник директора'},
  { name: 'Жуковская Елена Дмитриевна', position: 'Главный бухгалтер, начальник управления'},
];

const data = [
  {
    title: 'За 2021 год',
    items,
  },
  {
    title: 'За 2020 год',
    items,
  },
  {
    title: 'За 2019 год',
    items,
  },
];

export default function news() {
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
        {data.map(d => (
          <Fragment key={d.title}>
            <Header>{d.title}</Header>
          </Fragment>
        ))}
      </Page>
    </>
  );
}
