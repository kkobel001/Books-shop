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
`;

const StyledItem = styled.div`
  height: 70px;
  margin: 0px;
  display: grid;
  align-content: center;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;

// const StyledPic= styled.img`
// height:250px;
// width:250px;
// `;
const CardImageGallery = () => (
  <StyledContainer>
    <StyledWrapper>
      {imageVege.map(({ id, title, image }) => (
        <StyledItem title={title} key={id} image={image} />
      ))}
    </StyledWrapper>
  </StyledContainer>
);

// CardImageGallery.propTypes = {
//     pageveg: PropTypes.string.isRequired,

//   };

export default CardImageGallery;
