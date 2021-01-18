import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import blog01 from '../../../assets/images/blog-img-01.jpg';
import blog02 from '../../../assets/images/blog-img-02.jpg';
import blog03 from '../../../assets/images/blog-img.jpg';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';

import { Container } from '../../../theme/GlobalStyle';

const StyledContainer = styled(Container)`
  height: 830px;
  background-color: #fafafa;
  padding-top: 90px;
  padding-bottom: 90px;
  ${Container};
`;

const StyledWrapper = styled.div`
  height: 720px;
  width: 580px;
  display: grid;
  align-content: center;
  grid-template-columns: auto auto auto;
  grid-gap: 30px;
  justify-items: center;
`;

const CardItem = styled.div`
  background-color: #5e6fc5;
  height: 560px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;
const CardItemImage = styled.img`
  height: 300px;
  width: 350px;
`;

const CardText = styled.div`
  text-align: center;

  & p {
    margin-top: 10px;
  }
`;

function CardLarge({ title, about }) {
  return (
    <StyledContainer>
      <CardText>
        <h1>latest blog</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
      </CardText>
      <StyledWrapper>
        <CardItem>
          <CardItemImage src={blog01} alt="blogimg" />
          <CardText>
            {' '}
            <h2>{title}</h2>
            {about}
          </CardText>
          <ButtonIcon />
        </CardItem>
        <CardItem>
          <CardItemImage src={blog02} alt="blogimg" />
          <CardText>
            {' '}
            <h2>{title}</h2>
            {about}
          </CardText>
          <ButtonIcon />
        </CardItem>
        <CardItem>
          <CardItemImage src={blog03} alt="blogimg" />
          <CardText>
            <h2>{title}</h2>
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
