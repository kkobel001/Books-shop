import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import NavItemRight from '../NavItemRight/NavItemRight';

const StyledMenuWrapper = styled.div`
  background-color: black;
  height: 30px;
  width: 100vhpx;
  color: white;
  align-items: center;
`;

function NavItemBottom() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <StyledMenuWrapper onClick={handleClick}>
        <MenuIcon />
        <CloseOutlinedIcon />
        <NavLink to="/"> Home</NavLink>
        <NavLink to="/"> About us</NavLink>
        <NavLink to="/"> Shop</NavLink>
        <NavLink to="/"> Gallery</NavLink>
        <NavLink to="/"> Contact us</NavLink>
        <NavItemRight />
      </StyledMenuWrapper>
    </>
    // i className={click ? 'fas fa-times' : 'fas fa-bars'} /> */}
  );
}

export default NavItemBottom;
