import React from "react";
import SC, {css} from 'styled-components';
import Link from "next/link";
import { minDevice } from '../theme';

const Container = SC.div`
  display: flex;
  flex-direction: column;
  background: #F2F4FA;
  border-radius: 3px;
  padding: 30px;
  @media ${minDevice.laptopL} {
    width: 360px;
  }
`;

const Item = SC.a`
  padding: 16px 0;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #008E5B;
  &:hover {
    color: #333E66;
  }
  ${({ active }) => active  && css`
    color: #333E66;
  `}
`;

export const AnchoredLayout = ({ list }) => list ? (
  <Container>
    {(list || []).map(i => (
      <Link key={i.name} href={i.href} passHref>
        <Item>{i.name}</Item>
      </Link>
    ))}
  </Container>
) : null;

