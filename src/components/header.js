import React from 'react';
import SC from 'styled-components';
import {HeaderLogo} from './logo';
import {NavLink} from './navLink';

const Container = SC.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  filter: drop-shadow(0px 0px 20px rgba(51, 62, 102, 0.1)) drop-shadow(0px 0px 40px rgba(51, 62, 102, 0.05));
`;

const Line = SC.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 60px;
`;

const menu = [
  { name: 'Услуги', href: '/services' },
  { name: 'Объекты', href: '/objects' },
  { name: 'Об учреждении', href: '/about' },
  { name: 'Контакты', href: '/contacts' },
];

export const Header = () => {
  const [active, setActive] = React.useState(null);
  const items = menu.map(i => <NavLink key={i.name} {...i} />);

  return (
    <Container>
      <Line>
        <HeaderLogo />
        <div>
          {items}
        </div>
      </Line>
    </Container>
  );
};
