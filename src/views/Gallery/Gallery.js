import React from 'react';
import styled from 'styled-components';
import UserPageTemplate from '../../templates/UserPageTemplates';
import Tittlebox from '../../components/atoms/Tittlebox/Tittlebox';
import CardImageGallery from './CardImageGallery';

const StyledWrapper = styled.div`
  margin: 0px;
`;

const Gallery = () => (
  <>
    <UserPageTemplate />
    <StyledWrapper>
      <Tittlebox pagename="GALLERY" page="GALLERY" />
      <CardImageGallery pageveg="pagre" />
    </StyledWrapper>
  </>
);

export default Gallery;
