import React from 'react';
import styled from 'styled-components';
import UserPageTemplate from '../../templates/UserPageTemplates';
import Tittlebox from '../../components/atoms/Tittlebox/Tittlebox';
import FilterImage from './FilterImage';
import Footer from '../../components/molecules/Footer/Footer';

const StyledWrapper = styled.div`
  margin: 0px;
`;

const Gallery = () => (
  <>
    <UserPageTemplate />
    <StyledWrapper>
      <Tittlebox pagename="GALLERY" page="GALLERY" />
      <FilterImage pageveg="pagre" />
    </StyledWrapper>
    <Footer />
  </>
);

export default Gallery;
