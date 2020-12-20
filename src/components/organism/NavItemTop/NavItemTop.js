/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import LogoIcon from '../../../assets/images/logo.jpg';

const StyledWrapper = styled.div`
  display: flex;
  padding-bottom: 15px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  @media (max-width: 1500px) {
    width: 70px;
    height: 50px;
  }
  @media (max-width: 1100px) {
    border-color: red;
  }
`;
const StyledNavbarLogo = styled.div`
  width: 100px;
  height: 100px;
  /* 
  @media (max-width: 1500px) {
    width: 70px;
    height: 50px;
  } */
`;

const NavItemTop = () => (
  <>
    <StyledWrapper>
      <StyledNavbarLogo>
        <NavLink to="/home">
          <img src={LogoIcon} alt="logo" />
        </NavLink>
      </StyledNavbarLogo>
    </StyledWrapper>
  </>
);

export default NavItemTop;
