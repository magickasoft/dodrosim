import React from 'react';
import Link from 'next/link';
import SC from 'styled-components';
import { maxDevice, minDevice } from '../theme';

const Container = SC.div`
  &:hover {
    cursor: pointer;
  }
  width: 29%;
  min-width: 29%;
  height: 160px;
  background: #FFFFFF;
  border: 1px solid #DFE3F3;
  box-sizing: border-box;
  border-radius: 3px;
  margin: 15px 20px;
  overflow: hidden;
  padding: 15px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${maxDevice.laptopL} {
    width: 44%;
    min-width: 44%;
  }
  @media ${maxDevice.laptop} {
    width: 38%;
    min-width: 38%;
  }
  @media ${maxDevice.mobileL} {
    width: 80%;
    min-width: 80%;
  }
`;

const Label = SC.div`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  color: #777777;
  // white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

const Category = SC.div`
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 13px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #777777;
`;

export const VacancyCard = ({label, category, ...props}) => {
  return (
    <Link passHref {...props}>
      <Container>
        {category && (<Category>{category}</Category>)}
        <a>
          {label && (<Label>{label}</Label>)}
        </a>
      </Container>
    </Link>
  );
};
