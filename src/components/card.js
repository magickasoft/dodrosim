import React from 'react';
import Link from 'next/link';
import SC from 'styled-components';
import {Icon} from './icon';

const Container = SC.div`
  &:hover {
    cursor: pointer;
  }
  width: 160px;
  min-width: 160px;
  height: 160px;
  background: #FFFFFF;
  border: 1px solid #DFE3F3;
  box-sizing: border-box;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin: 15px 20px;
`;

const Label = SC.div`
  white-space: pre-line;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  color: #777777;
  width: 100%;
  height: 100%;
  padding: 35px 10px 10px 10px;
`;

const DownLoad = SC(Icon)`
  margin: 15px 10px;
`;

export const Card = ({label, ...props}) => {
  return (
    <Link passHref {...props}>
      <Container>
        <DownLoad name="download" size="18" color="#008E5B" />
        <a>
          {label && (<Label>{label}</Label>)}
        </a>
      </Container>
    </Link>
  );
};
