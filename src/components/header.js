import React from 'react';
import SC from 'styled-components';
import {HeaderLogo} from './logo';
import {Icon} from './icon';
import {NavLink} from './navLink';
import { maxDevice, minDevice } from '../theme';

const Container = SC.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  filter: drop-shadow(0px 0px 20px rgba(51, 62, 102, 0.1)) drop-shadow(0px 0px 40px rgba(51, 62, 102, 0.05));
`;

const Line1 = SC.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 60px;
`;

const Line2 = SC.div`
  border-top-color: #777777;
  border-top-width: 1px;
  border-top-style: solid;
  padding-left: 7px;
  display: flex;
  align-items: center;
  height: 60px;
  @media ${maxDevice.mobileL} {
    margin-bottom: 30px;
  }
  @media ${minDevice.tablet} {
    display: none;
  }
`;

const List = SC.div`
  @media ${maxDevice.tablet} {
    display: none;
  }
`;
const Menu = SC.div`
  @media ${minDevice.tablet} {
    display: none;
  }
`;

const menu = [
  { name: 'Услуги', href: '/services' },
  { name: 'Объекты', href: '/objects' },
  { name: 'Об учреждении', href: '/about' },
  { name: 'Контакты', href: '/contacts' },
];

export const Header = () => {
  const [isOpen, setOpen] = React.useState(false);
  const items = menu.map(i => <NavLink key={i.name} {...i} />);

  return (
    <Container>
      <Line1>
        <HeaderLogo />
        <List>
          {items}
        </List>
        <Menu onClick={() => setOpen(!isOpen)}>
          <Icon name={isOpen ? 'close' : 'burger'} size={24} />
        </Menu>
      </Line1>
      {isOpen && (
        <Line2>
          <div>
            {items}
          </div>
        </Line2>
      )}
    </Container>
  );
};
