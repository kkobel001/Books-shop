import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
// import LogoIcon from '../../assets/images/logo.jpg';
import { Nav, NavbarConteiner, NavLogo, LogoImg, MobileIcon, NavMenu, NavItem, NavLinks } from './Navbar.elements';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <Nav>
        <NavbarConteiner>
          <NavLogo>
            <Link to="/home">
              <LogoImg sssb alt="logo" />
            </Link>
          </NavLogo>

          <MobileIcon onClick={handleClick}>{click ? <MenuIcon /> : <CloseIcon />}</MobileIcon>
          <NavMenu onClick={handleClick}>
            <NavItem>
              <NavLinks exact to="/home" activeclass="active">
                Home
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavMenu onClick={handleClick}>
            <NavItem>
              <NavLinks exact to="/home" activeclass="active">
                Home
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavMenu onClick={handleClick}>
            <NavItem>
              <NavLinks exact to="/home" activeclass="active">
                Home
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavMenu onClick={handleClick}>
            <NavItem>
              <NavLinks exact to="/home" activeclass="active">
                Home
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavMenu onClick={handleClick}>
            <NavItem>
              <NavLinks exact to="/home" activeclass="active">
                Home
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarConteiner>
      </Nav>
    </>
  );
};

export default Navbar;
