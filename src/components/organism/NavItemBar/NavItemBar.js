/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import LogoIcon from '../../../assets/images/logo.jpg';

const StyledWrapper = styled.div`
  z-index: 9999;
  position: fixed;
  display: flex;
  padding: 100px 90px;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  color: black;
`;
const StyledNavbarLogo = styled.div`
  margin-left: 10px;
`;

// const LogoIcon = styled(LogoIcon)`
//   margin-left: 10px;
// `;

const NavItemBar = () => (
  <>
    <StyledWrapper>
      <StyledNavbarLogo>
        <NavLink to="/">
          <img src={LogoIcon} alt="LogoIcon" />
        </NavLink>
      </StyledNavbarLogo>
    </StyledWrapper>
  </>
);

export default NavItemBar;
