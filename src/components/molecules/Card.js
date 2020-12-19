import React from 'react';
import styled from 'styled-components';
import NavItemTop from '../organism/NavItemTop/NavItemTop';

import NavItemRight from '../organism/NavItemRight/NavItemRight';
import NavItemBottom from '../organism/NavItemBottom/NavItemBottom';

const StyledWrapper = styled.div`
  margin-top: 20px;
  /* display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 10px; */
  background-color: ${({ theme }) => theme.light};
  font-size: 30px;
  text-align: center;
  @media (max-width: 800px) {
    StyledWrapper {
      flex-direction: column;
    }
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
