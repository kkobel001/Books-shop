import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from '@material-ui/icons/Menu';
import LogoIcon from '../../assets/images/logo.jpg';
import { Nav, NavMenu, NavbarConteiner, NavLogo, LogoImg, NavItem, MobileIcon } from './Navbar.elements';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <Nav>
        <NavbarConteiner>
          <NavLogo>
            <NavLink to="/home">
              <LogoImg src={LogoIcon} alt="logo" />
            </NavLink>
          </NavLogo>
          <MobileIcon onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLink exact to="/home" activeclass="active">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact to="/about" activeclass="active">
                Home
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink exact to="/shop" activeclass="active">
                Home
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink exact to="/gallery" activeclass="active">
                Home
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink exact to="/contact" activeclass="active">
                Home
              </NavLink>
            </NavItem>
          </NavMenu>
        </NavbarConteiner>
      </Nav>
    </>
  );
};

export default Navbar;
