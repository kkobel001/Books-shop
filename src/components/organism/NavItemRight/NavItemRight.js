import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';

const StyledWrapper = styled.div`
  background-color: green;
  height: 100px;
`;
const NavItemRight = () => (
  <StyledWrapper>
    <Button>My card</Button>
  </StyledWrapper>
);
export default NavItemRight;
