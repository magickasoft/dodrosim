import React from 'react';
import SC from 'styled-components';
import { maxDevice } from '../theme';
import { AnchoredLayout } from './anchoredLayout';

const Container = SC.header`
  margin: 120px 140px 60px 140px;
  @media ${maxDevice.tablet} {
    margin: 120px 30px 60px 30px;
  }
  @media ${maxDevice.mobileL} {
    margin: 90px 30px 50px 30px;
  }
`;

const Header = SC.div`
  white-space: pre-line;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 48px;
  color: #000000;
  margin-bottom: 40px;
  @media ${maxDevice.mobileL} {
    margin-bottom: 30px;
    font-size: 30px;
    line-height: 36px;
  }
`;

const Text = SC.div`
  white-space: pre-line;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #777777;
  max-width: 760px;
`;

export const Page = ({label, text, children, ancors}) => {
  return (
    <Container>
      {label && (<Header>{label}</Header>)}
      <AnchoredLayout ancors={ancors} />
      {text && (<Text>{text}</Text>)}
      {children}
    </Container>
  );
};
