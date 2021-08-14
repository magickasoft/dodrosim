import React from 'react';
import Head from "next/head";
import SC from 'styled-components';
import { Page, Row, SelfCard, Accordion } from '../../components';
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

const Text = SC.div`
  margin: 12px 0;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #777777;
`;

const Divider = SC.div`
  margin: 5px 0;
  height: 1px;
  width: 100%;
  background: #777777;
  opacity: 0.2;
`;


const About = SC.div`
  @media ${minDevice.laptop} {
    width: 80%;
  }
`;

const Years = SC.div`
  margin: 40px 0 0 0;
`;

const persons = [
  { name: 'Дзиковский Андрей Сергеевич', position: 'Директор'},
  { name: 'Сазонов Илья Викторович', position: 'Заместитель директора'},
  { name: 'Гераськин Александр Викторович', position: 'Заместитель директора'},
  { name: 'Ионочкин Алексей Иванович', position: 'Заместитель директора'},
  { name: 'Калмыков Евгений Александрович', position: 'Советник директора'},
  { name: 'Жуковская Елена Дмитриевна', position: 'Главный бухгалтер, начальник управления'},
];

const details = [
  { name: 'Полное наименование', text: 'Федеральное государственное бюджетное учреждение «Дирекция по обеспечению деятельности Федерального агентства по управлению государственным имуществом»'},
  { name: 'Сокращенное наименование', text: 'ФГБУ «ДОД Росимущества»'},
  { name: 'Юридический адрес', text: '111024, г. Москва, проезд Завода Серп и Молот, д. 5, стр. 2'},
  { name: 'Фактический адрес', text: '111024, г. Москва, проезд Завода Серп и Молот, д. 5, стр. 2'},
  { name: 'Почтовый адрес', text: '111024, г. Москва, проезд Завода Серп и Молот, д. 5, стр. 2'},
  { name: 'Телефон', text: '8 (495) 361-45-21'},
  { name: 'Факс', text: '8 (495) 361-49-34'},
  { name: 'ИНН', text: '7722467407'},
  { name: 'КПП', text: '772201001'},
  { name: 'Рассчетный счет', text: '03214643000000017300'},
  { name: 'Бик', text: '004525988'},
  { name: 'Банк', text: 'ГУ Банка России по ЦФО УФК по г. Москве г. Москва'},
  { name: 'ОКПО', text: '33308434'},
  { name: 'ОГРН', text: '1187746840423'},
  { name: 'ОКВЭД', text: '68.32.2'},
  { name: 'Директор', text: 'Дзиковский Андрей Сергеевич'},
  { name: 'Главный бухгалтер', text: 'Жуковская Елена Дмитриевна'},
];

export default function about() {
  return (
    <>
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
        <Header>Деятельность</Header>
        <Text>
          Федеральное государственное бюджетное учреждение «Дирекция по обеспечению деятельности Федерального агентства по управлению государственным имуществом» (ОГРН 1187746840423,  ИНН 7722467407), на основании распоряжения Правительства Российской Федерации от 24.01.2018 № 75-р было преобразовано из Федерального государственного унитарного предприятия «Авторемонтный центр Мингосимущества России» (ОГРН 1027739280470, ИНН 7722011854).
        </Text>
        <Text>
          Федеральное государственное бюджетное учреждение «Дирекция по обеспечению деятельности Федерального агентства по управлению государственным имуществом» – это некоммерческая организация, созданная Российской Федерацией для выполнения работ, оказания услуг в целях обеспечения реализации предусмотренных законодательством Российской Федерации полномочий органов государственной власти (Федерального агентства по управлению государственным имуществом).
        </Text>
        <Text>
          Функции и полномочия учредителя учреждения осуществляет Федеральное агентство  по управлению государственным имуществом. ФГБУ «ДОД Росимущества» осуществляет свою деятельность на основании государственного задания.
        </Text>
        <Text>
          Основными задачами и функциями учреждения являются: эксплуатация и обслуживание федерального недвижимого имущества, используемого для нужд Росимущества  и его территориальных органов, развитие технической базы Росимущества,  а также материального и технического обеспечения его деятельности.
        </Text>
        <Header>Руководство</Header>
        <Content>
          {persons.map(i => <SelfCard key={i.name} {...i} />)}
        </Content>
        <Header>Сведения об организации</Header>
        <About>
          {details.map((i, index, data) => (
            <>
              <Row key={i.name} {...i} />
              {index + 1 !== data.length && <Divider />}
            </>
          ))}
        </About>
        <Header id="corruption">Противодействие коррупции</Header>
        Вы можете направить сообщение о фактах коррупционных действий по электронной почте на адрес: <a href='mailto:corruption@dodrosim.ru'>corruption@dodrosim.ru</a>
        <Text>
          Все сообщения, поступившие на электронный почтовый ящик, рассматриваются в порядке, установленном Федеральным законом от 2 мая 2006 года № 59-ФЗ «О порядке рассмотрения обращений граждан Российской Федерации».
        </Text>
        <Text>
          Обращаем Ваше внимание, что в соответствии с частью 3 статьи 7, частью 4 статьи 10 и частью 1 статьи 11 Федерального закона «О порядке рассмотрения обращения граждан Российской Федерации»:
        </Text>
        <Text>
          – обращение, поступившее в форме электронного документа, принимается к рассмотрению, только если оно содержит фамилию, имя, отчество (при наличии) гражданина, направившего обращение, адрес электронной почты, если ответ должен быть направлен в форме электронного документа, и почтовый адрес, если ответ должен быть направлен в письменной форме;
        </Text>
        <Text>
          – ответ на обращение, поступившее в форме электронного документа, направляется в форме электронного документа по адресу электронной почты, указанному в обращении, или в письменной форме по почтовому адресу, указанному в обращении;
        </Text>
        <Text>
          – в случае, если в обращении не указаны фамилия заявителя и почтовый либо электронный адрес для направления ответа, но в указанном обращении содержатся сведения о подготавливаемом, совершаемом или совершенном противоправном деянии, а также о лице, его подготавливающем, совершающем или совершившем, обращение направляется для рассмотрения в государственный орган в соответствии с его компетенцией, при этом письменный ответ на обращение не дается.
        </Text>
        <Years>
          <Accordion title="За 2020 год">
            Monthly Tracked Revenue is calculated across all apps. For each
            app, MTR is the revenue in USD reported to Apphud during one
            billing period before Apple cut. We count only real transactions,
            sandbox purchases are not counted.
          </Accordion>
          <Accordion title="За 2019 год">
            Monthly Tracked Revenue is calculated across all apps. For each
            app, MTR is the revenue in USD reported to Apphud during one
            billing period before Apple cut. We count only real transactions,
            sandbox purchases are not counted.
          </Accordion>
          <Accordion title="За 2018 год">
            Monthly Tracked Revenue is calculated across all apps. For each
            app, MTR is the revenue in USD reported to Apphud during one
            billing period before Apple cut. We count only real transactions,
            sandbox purchases are not counted.
          </Accordion>
          <Accordion title="За 2017 год">
            Monthly Tracked Revenue is calculated across all apps. For each
            app, MTR is the revenue in USD reported to Apphud during one
            billing period before Apple cut. We count only real transactions,
            sandbox purchases are not counted.
          </Accordion>
          <Accordion title="За 2016 год">
            Monthly Tracked Revenue is calculated across all apps. For each
            app, MTR is the revenue in USD reported to Apphud during one
            billing period before Apple cut. We count only real transactions,
            sandbox purchases are not counted.
          </Accordion>
        </Years>
      </Page>
    </>
  );
}
