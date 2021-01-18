import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container } from '../../../theme/GlobalStyle';
import im01 from '../../../assets/images/img_01.jpg';
import im02 from '../../../assets/images/img_02.jpg';
import im03 from '../../../assets/images/img_03.jpg';

const CardContainer = styled(Container)`
  height: 700px;
  background-color: #fafafa;
  padding-top: 90px;
  padding-bottom: 90px;
  position: relative;

  ${Container}

  @media screen and (max-width: 1290px) {
    height: 1500px;
  }
`;
const StyledWrapper = styled.div`
  height: 520px;
  width: 100%;
  display: grid;
  align-content: center;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;

  @media screen and (max-width: 1290px) {
    display: block;
  }
`;

const CardItemImage = styled.img`
  width: 100%;
  height: 90%;
`;

const CardText = styled.div`
  background-color: #bac237;
  height: 50px;
  text-align: center;
  color: #ffffff;
  margin-top: -6px;
  padding-bottom: 6px;
  -webkit-transition: background-color 2s ease-out;
  -moz-transition: background-color 2s ease-out;
  -o-transition: background-color 2s ease-out;
  transition: background-color 2s ease-out;
`;

const CardItem = styled.div`
  /* background-color: rgba(255, 255, 255, 0.8); */
  border: 1px dot rgba(0, 0, 0, 0.8);
  font-size: 25px;
  height: 400px;
  width: 360px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;

  & a {
    text-decoration: none;
  }

  &:hover {
    box-shadow: inset 0 -0.3em 0.3em rgba(0, 0, 0, 0.1), 0 0 0 0.2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    -webkit-transform: translateX(-3px);
    transform: translateX(-3px);

    ${CardItemImage} {
      opacity: 0.6;
    }
    ${CardText} {
      background-color: #000000;
      color: #ffffff;
    }
  }
  @media screen and (max-width: 1290px) {
    margin-bottom: 60px;
  }
`;

function CardImage({ name }) {
  return (
    <CardContainer>
      <StyledWrapper>
        <CardItem>
          <a href="./">
            <CardItemImage src={im01} alt="categories" />
            <CardText>{name}</CardText>
          </a>
        </CardItem>
        <CardItem>
          <a href="./">
            <CardItemImage src={im02} alt="categories" />
            <CardText>{name}</CardText>
          </a>
        </CardItem>{' '}
        <CardItem>
          <a href="./">
            <CardItemImage src={im03} alt="categories" />
            <CardText>{name}</CardText>
          </a>
        </CardItem>
      </StyledWrapper>
    </CardContainer>
  );
}

CardImage.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CardImage;
