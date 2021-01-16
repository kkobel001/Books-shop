import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import blog01 from '../../../assets/images/blog-img-01.jpg';
import blog02 from '../../../assets/images/blog-img-02.jpg';
import blog03 from '../../../assets/images/blog-img.jpg';
import { Container } from '../../../theme/GlobalStyle';

const StyledContainer = styled(Container)`
  height: 830px;
`;

const StyledWrapper = styled.div`
  height: 720px;
  width: 580px;
  display: grid;
  align-content: center;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
`;

const CardItem = styled.div`
  margin: auto;
`;
const CardItemImage = styled.img`
  height: 300px;
  width: 350px;
`;

const CardText = styled.div`
  margin: auto;
`;

function CardLarge({ about }) {
  return (
    <StyledContainer>
      <CardText>
        <h1>latest blog</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
      </CardText>
      <StyledWrapper>
        <CardItem>
          <CardItemImage src={blog01} alt="blogimg" />
          <CardText>{about}</CardText>
        </CardItem>
        <CardItem>
          <CardItemImage src={blog02} alt="blogimg" />
          <CardText>{about}</CardText>
        </CardItem>
        <CardItem>
          <CardItemImage src={blog03} alt="blogimg" />
          <CardText>{about}</CardText>
        </CardItem>
      </StyledWrapper>
    </StyledContainer>
  );
}

CardLarge.propTypes = {
  about: PropTypes.string.isRequired,
};

export default CardLarge;
