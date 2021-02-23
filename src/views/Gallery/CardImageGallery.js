import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import { Container } from '../../theme/GlobalStyle';
import { imageVege } from './Products';
import { Button } from '../../components/atoms/Button/Button';
// import { EffectPage } from '../../components/atoms/EffectPage/EffectPage'

const StyledContainer = styled(Container)`
  ${Container};
`;

const StyledWrapper = styled.div`
  margin-top: 50px;
  height: 700px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

const StyledItem = styled.img`
  height: 250px;
  width: 250px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  align-content: center;
`;
const StyledRow = styled.div`
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  display: grid;
`;

const StyledRowInfo = styled.div`
  text-align: center;

  & p {
    margin-top: 10px;
    margin-bottom: 15px;
  }
`;
const RowButton = styled.div`
  margin-bottom: 25px;

  ${Button} {
    margin-left: 15px;
  }
`;

const CardImageGallery = () => (
  <StyledContainer>
    <StyledWrapper>
      <StyledRowInfo>
        <h1>Out Gallery</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
        <RowButton>
          <Button>All</Button>
          <Button>Fruits</Button>
          <Button>Bulbs</Button>
        </RowButton>
      </StyledRowInfo>
      <StyledRow>
        {imageVege.map(({ id, title, image }) => (
          <StyledItem title={title} key={id} src={image} />
        ))}
        ;
      </StyledRow>
    </StyledWrapper>
  </StyledContainer>
);

// CardImageGallery.propTypes = {
//     title: PropTypes.string.isRequired,
//     id: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//   };

export default CardImageGallery;
