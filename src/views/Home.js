import React from 'react';
import styled from 'styled-components';
import Slider from '../components/atoms/Slider/Slider';
import { SliderImages } from '../components/atoms/Slider/SliderImages';
import LogoBaner from '../assets/images/banner01.jpg';
import CardImage from '../components/molecules/Card/CardImage';

const StyledWrapper = styled.div`
  width: 100%;
  height: 600px;
  /* background-image: url(${LogoBaner}); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  filter: brightness(60%);
`;

const StyledPic = styled.div`
  margin-top: auto;
`;

const Home = () => (
  <>
    <StyledWrapper>
      <StyledPic>
        <Slider slides={SliderImages} />
        <CardImage />
      </StyledPic>
    </StyledWrapper>
  </>
);
export default Home;
