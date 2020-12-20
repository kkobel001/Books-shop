import React from 'react';
import styled from 'styled-components';
import NavItemTop from '../organism/NavItemTop/NavItemTop';
import NavItemRight from '../organism/NavItemRight/NavItemRight';
import NavItemBottom from '../organism/NavItemBottom/NavItemBottom';

const StyledWrapper = styled.div`
  margin-top: 20px;
  font-size: 30px;
  text-align: center;
  position: fixed;
  left: 0;
  top: 0;

  @media (max-width: 1500px) {
    grid-gap: 45px;
    grid-template-columns: repeat(2, 1fr);
    font-size: 15px;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const Card = () => (
  <>
    <NavItemTop />
    <StyledWrapper>
      <NavItemBottom />
      <NavItemRight />
    </StyledWrapper>
  </>
);

export default Card;
