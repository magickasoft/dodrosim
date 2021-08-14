import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import SC from 'styled-components';
import { maxDevice } from '../theme';

const Container = SC.div`
  &:hover {
    cursor: pointer;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 45%;
  min-width: 45%;
  min-height: 160px;
  background: #FFFFFF;
  border: 1px solid #DFE3F3;
  box-sizing: border-box;
  border-radius: 3px;
  margin: 15px 20px;
  overflow: hidden;
  padding: 15px 10px 10px 10px;
  @media ${maxDevice.mobileL} {
    width: 90%;
    min-width: 90%;
  }
`;

const Content = SC.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 10px 0 0;
`;

const Label = SC.div`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  color: #777777;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

const Date = SC.div`
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 13px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #777777;
`;

const ImageContent = SC.div`
  width: 130px;
  min-width: 130px;
  height: 130px;
  min-height: 130px;
  background-repeat: no-repeat;
  background-position: center; 
`;

export const NewsCard = ({label, date, url, href}) => {
  return (
    <Link passHref href={href}>
      <Container>
        <Content>
          {date && (<Date>{date}</Date>)}
          <a>
            {label && (<Label>{label}</Label>)}
          </a>
        </Content>
        <ImageContent style={{ backgroundImage: `url(${url})` }} />
      </Container>
    </Link>
  );
};
