import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { Container } from '../../theme/GlobalStyle';
import { imageVege } from './Products';
// import { EffectPage } from '../../components/atoms/EffectPage/EffectPage'

const StyledContainer = styled(Container)`
  ${Container};
`;

const StyledWrapper = styled.div`
  margin-top: 0px;
  background-color: #1100ff;
  height: 700px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  display: grid;
`;

const StyledItem = styled.img`
  height: 250px;
  width: 250px;
  padding: 20px 20px 20px 20px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  align-content: center;
`;

const CardImageGallery = () => (
  <StyledContainer>
    <StyledWrapper>
      {imageVege.map(({ id, title, image }) => (
        <StyledItem title={title} key={id} src={image} />
      ))}
    </StyledWrapper>
  </StyledContainer>
);

// CardImageGallery.propTypes = {
//     title: PropTypes.string.isRequired,
//     id: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//   };

export default CardImageGallery;
