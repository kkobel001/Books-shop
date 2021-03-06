import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const StyledSrapperSlider = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  height: 700px;
  overflow: hidden;
  transition-duration: 500;
`;
const properties = {
  indicators: true,
  scale: 1.4,
};
const StyledImage = styled.img`
  height: 700px;
  width: 100%;
  object-fit: cover;
`;
const StyledArrowBackIosIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 42px;
  font-size: 15px;
  color: #000000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary};
  &:hover {
    transition: all 0.3s ease-out;
    background-color: #808080;
  }
`;
const StyledRightIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 42px;
  font-size: 15px;
  color: #000000;
  z-index: 10;
  cursor: pointer;
  user-select: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary};
  &:hover {
    transition: all 0.3s ease-out;
    background-color: #808080;
  }
`;

function Slider({ slides }) {
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
    <StyledSrapperSlider {...properties}>
      <StyledArrowBackIosIcon>
        <ChevronLeftIcon onClick={prevSlide} />
      </StyledArrowBackIosIcon>
      <StyledRightIcon>
        <ChevronRightIcon onClick={nextSlide} />
      </StyledRightIcon>
      {slides.map(slide => (
        <div className={slide.id === current ? '<slideactive />' : '<slide />'} key={slide.id}>
          {slide.id === current && <StyledImage src={slide.image} alt="banner" />}
        </div>
      ))}
    </StyledSrapperSlider>
  );
}

Slider.propTypes = {
  slides: PropTypes.shape([]).isRequired,
};

export default Slider;
