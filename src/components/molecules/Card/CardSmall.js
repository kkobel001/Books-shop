import React from 'react';
import styled from 'styled-components';
import Img01 from '../../../assets/images/add-img-01.jpg';
import Img02 from '../../../assets/images/add-img-02.jpg';
import { Container } from '../../../theme/GlobalStyle';

const CardContainer = styled(Container)`
  height: 100%;
  padding-right: 0px;
  padding-left: 0px;
  width: 100%;

  ${Container}

  @media screen and (max-width: 1290px) {
    height: auto;
  }
`;

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.light};
  padding-top: 70px;
  padding-bottom: 70px;
  height: 100%;
  width: 100%;
  display: grid;
  align-content: center;
  grid-template-columns: auto auto;
  grid-gap: 10px;

  @media screen and (max-width: 1290px) {
    display: block;
  }
`;

const CardItem = styled.div`
  width: 543px;
  height: 360px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;

  &:hover {
    height: 100%;
    margin: 20px auto;
    transition: 500ms linear;
  }
  @media screen and (max-width: 1290px) {
    height: 100%;
    margin-top: 20px;
    display: block;
  }
`;

const CardItemImage = styled.img`
  height: 310px;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.1);
`;
const CardSmall = () => (
  <CardContainer>
    <StyledWrapper>
      <CardItem>
        <CardItemImage src={Img01} alt="imgd" />
      </CardItem>
      <CardItem>
        <CardItemImage src={Img02} alt="imgd" />
      </CardItem>
    </StyledWrapper>
  </CardContainer>
);

export default CardSmall;
