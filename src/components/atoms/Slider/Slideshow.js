import React from 'react';
import BackgroundSlideshow from 'react-background-slideshow';
import banner01 from '../../../assets/images/banner01.jpg';
import banner02 from '../../../assets/images/banner02.jpg';
import banner03 from '../../../assets/images/banner03.jpg';
import { Button } from '../Button/Button';

const Slideshow = () => (
  <div>
    <BackgroundSlideshow images={[banner01, banner02, banner03]} duration={10} transition={2} />
    <Button hhhhhhhh />
  </div>
);

export default Slideshow;

// import React from 'react';
// import {Slide} from 'react-slideshow-image';
//  import styled from 'styled-components';
// import {SliderImages} from './SliderImages'

//  const StyledWrapperSlider = styled.div`
// margin-top:0;
// `;

//  const StyledBanner = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-size: cover;
//   height: 350px;
// `;
// //  const proprietes={
// //    ruration:5000,
// //    transitionDuration: 500,
// //    infinite: true,
// //    indicators: true,
// //    arrows: true,

// //  }

//  const Slideshow = () => (
// <StyledWrapperSlider>

// <Slide >
//    <StyledBanner>
//    <div style={{'backgroundImage': `url(${SliderImages[0].image})`,
//     'height': '400px'}}>
//         <span>Slide 1</span>
//       </div>
//    </StyledBanner>
//    <StyledBanner>
//    <div style={{'backgroundImage': `url(${SliderImages[1].image})`,
//     'width': '400px'}}>
//         <span>Slide 1</span>
//       </div>
//    </StyledBanner>
//    <StyledBanner>
//    <div style={{'backgroundImage': `url(${SliderImages[2].image})`,
//     'height': '400px'}}>
//         <span>Slide 1</span>
//       </div>
//    </StyledBanner>
//   </Slide>

// </StyledWrapperSlider>

//  );

// export default Slideshow;
