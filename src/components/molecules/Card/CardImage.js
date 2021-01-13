import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../theme/GlobalStyle';
import im01 from '../../../assets/images/img_01.jpg';
import im02 from '../../../assets/images/img_02.jpg';
import im03 from '../../../assets/images/img_03.jpg';
// import {Button}  from '../../atoms/Button/Button'

const CardContainer = styled(Container)`
  height: 700px;
  background-color: hsl(267, 90%, 87%);
  align-items: center;
  padding-top: 90px;
  padding-bottom: 90px;

  ${Container}
`;
const StyledWrapper = styled.div`
  height: 520px;
  background-color: hsl(149, 25%, 49%);
  width: 100%;
  display: grid;
  align-content: center;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
`;
const CardItem = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  height: 470px;
  width: 370px;
  margin-left: auto;
  margin-right: auto;

  /* display: inline-grid;
grid-template-columns: auto auto auto; */

  &:first-child {
    margin-left: 20p;
  }
`;
const CardItemImage = styled.img`
  width: 340px;
  height: 340px;
  @media screen and (max-width: 960px) {
    width: 240px;
  }
`;

const CardImage = () => (
  <CardContainer>
    <StyledWrapper>
      <CardItem>
        <CardItemImage src={im01} alt="categories" />
      </CardItem>
      <CardItem>
        <CardItemImage src={im02} alt="categories" />
      </CardItem>
      <CardItem>
        <CardItemImage src={im03} alt="categories" />
      </CardItem>
    </StyledWrapper>
  </CardContainer>
);

export default CardImage;
