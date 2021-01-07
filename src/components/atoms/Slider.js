import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { SliderImages } from './SliderImages';

const StyledSrapperSlider = styled.div`
  margin: auto;
`;

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = [slides.length];

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <StyledSrapperSlider>
      <ArrowBackIosIcon onClick={prevSlide} />
      <ChevronRightIcon onClick={nextSlide} />
      <SliderImages />
      {/* {SliderImages.map((slide,index) =>{
           return (
            <div 
            className={index === current ? 'slide active' :'slide'} >
             {index === current && ( 
             <img src={slide.image} alt="banner" />
                    )}
            </div>
           );
        })} */}
    </StyledSrapperSlider>
  );
};

Slider.propTypes = {
  slides: PropTypes.shape([]).isRequired,
};
export default Slider;
