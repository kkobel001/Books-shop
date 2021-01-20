import React from 'react';
import styled from 'styled-components';
import Slider from '../components/atoms/Slider/Slider';
import { SliderImages } from '../components/atoms/Slider/SliderImages';
import LogoBaner from '../assets/images/banner01.jpg';
import CardImage from '../components/molecules/Card/CardImage';
import CardSmall from '../components/molecules/Card/CardSmall';
import CardLarge from '../components/molecules/Card/CardLarge';
import Footer from '../components/molecules/Footer/Footer';

const StyledWrapper = styled.div`
  width: 100%;
  /* background-image: url(${LogoBaner}); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  /* filter: brightness(60%); */
`;

const Home = () => (
  <>
    <StyledWrapper>
      <Slider slides={SliderImages} />
      <CardImage name="Lorem ipsum dolor" />
      <CardSmall />
      <CardLarge
        title="Fusce in augue non nisi fringilla"
        about="Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis."
      />
      <Footer />
    </StyledWrapper>
  </>
);
export default Home;
