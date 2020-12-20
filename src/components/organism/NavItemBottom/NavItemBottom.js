import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
// import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

const StyledMenuWrapper = styled.div`
  position: fixed;
  width: 80%;
  color: black;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(6, auto);
  grid-gap: 5px;
  background-color: lightpink;
  list-style: none;
`;

const NavigationLink = styled(NavLink)`
  color: black;
  text-decoration: none;
`;

function NavItemBottom() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <StyledMenuWrapper onClick={handleClick}>
      <NavigationLink exact to="/home" activeclass="active">
        Home
      </NavigationLink>

      <NavigationLink exact to="/about" activeclass="active">
        About us
      </NavigationLink>
      <NavigationLink to="/shop" activeclass="active">
        Shop
      </NavigationLink>
      <NavigationLink to="/gallery" activeclass="active">
        Gallery
      </NavigationLink>
      <NavigationLink to="/contact" activeclass="active">
        Contact
      </NavigationLink>
      <MenuIcon />
      {/* <CloseOutlinedIcon /> */}
    </StyledMenuWrapper>

    // i className={click ? 'fas fa-times' : 'fas fa-bars'} /> */}
  );
}

export default NavItemBottom;
