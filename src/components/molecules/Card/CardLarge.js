import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import blog01 from '../../../assets/images/blog-img-01.jpg';
import blog02 from '../../../assets/images/blog-img-02.jpg';
import blog03 from '../../../assets/images/blog-img.jpg';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';

import { Container } from '../../../theme/GlobalStyle';

const StyledContainer = styled(Container)`
  height: 100%;
  background-color: #fafafa;
  padding-top: 90px;
  padding-bottom: 90px;
  ${Container};
  width: auto;
`;

const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  align-content: center;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;

  @media screen and (max-width: 1290px) {
    display: block;
  }
`;

const CardItem = styled.div`
  background-color: #f5f5f5;
  height: 560px;
  width: 350px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 1290px) {
    margin-top: 20px;
  }
`;
const CardItemImage = styled.img`
  height: 300px;
  width: 350px;
`;

const CardText = styled.div`
  text-align: center;
  letter-spacing: 2px;

  & h1 {
    font-size: 20px;
    margin-bottom: 10px;
    margin-top: 5px;
  }
  & p {
    margin-top: 10px;
    letter-spacing: 0px;
  }
`;

const StyledButtonIcon = styled(ButtonIcon)``;

function CardLarge({ title, about }) {
  return (
    <StyledContainer>
      <CardText>
        <h2>latest blog</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
      </CardText>
      <StyledWrapper>
        <CardItem>
          <CardItemImage src={blog01} alt="blogimg" />
          <CardText>
            {' '}
            <h1>{title}</h1>
            {about}
          </CardText>
          <StyledButtonIcon primary />
        </CardItem>
        <CardItem>
          <CardItemImage src={blog02} alt="blogimg" />
          <CardText>
            <h1>{title}</h1>
            {about}
          </CardText>
          <ButtonIcon />
        </CardItem>
        <CardItem>
          <CardItemImage src={blog03} alt="blogimg" />
          <CardText>
            <h1>{title}</h1>
            {about}
          </CardText>
          <ButtonIcon />
        </CardItem>
      </StyledWrapper>
    </StyledContainer>
  );
}

CardLarge.propTypes = {
  about: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CardLarge;
