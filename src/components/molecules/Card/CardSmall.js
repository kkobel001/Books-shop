import React from 'react';
import styled from 'styled-components';
import Img01 from '../../../assets/images/add-img-01.jpg';
import Img02 from '../../../assets/images/add-img-02.jpg';
// import  { Container } from '../../../theme/GlobalStyle';

const StyledWrapper = styled.div`
/* background-color: ${({ theme }) => theme.dark}; */
background-color: rgb(244, 244, 244);
height: 450px;
justify-content:center;

`;
const CardContainer = styled.div`
  height: 100%;
  padding-top: 70px;
  padding-bottom: 70px;
  padding-left: 340px;
  padding-right: 250px;
  width: 100%;

  @media screen and (max-width: 1290px) {
  }
`;

const CardItem = styled.div`
  float: left;
  height: 100%;
  padding-right: 55px;

  &:hover {
    height: 150px;
    margin: 20px auto;
    transition: 500ms linear;
  }
`;

const CardItemImage = styled.img`
  height: 310px;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.1);
`;
const CardSmall = () => (
  <StyledWrapper>
    <CardContainer>
      <CardItem>
        <CardItemImage src={Img01} alt="imgd" />
      </CardItem>
      <CardItem>
        <CardItemImage src={Img02} alt="imgd" />
      </CardItem>
    </CardContainer>
  </StyledWrapper>
);

export default CardSmall;
