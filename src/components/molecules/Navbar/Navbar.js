import React, { useState, useEffect } from 'react';
//  import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import LogoIcon from '../../../assets/images/logo.jpg';
import { Button } from '../../atoms/Button/Button';
import { Nav, NavbarConteiner, NavLogo, LogoImg, MobileIcon, NavMenu, NavItem, NavLinks, NavItemBtn, NavBtnLink, NavLinksLogo } from './Navbar.elements';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innnerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  return (
    <>
      <Nav>
        <NavbarConteiner>
          <NavLogo>
            <NavLinksLogo to="/home">
              <LogoImg src={LogoIcon} alt="logo" />
            </NavLinksLogo>
          </NavLogo>
          <MobileIcon onClick={handleClick}>{click ? <CloseIcon /> : <MenuIcon />}</MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks exact to="/home" activeclass="active">
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks exact to="/about" activeclass="active">
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks exact to="/gallery" activeclass="active">
                Gallery
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks exact to="/contact" activeclass="active">
                Contact
              </NavLinks>
            </NavItem>
            <NavItemBtn>
              {button ? (
                <NavBtnLink to="/sing-up">
                  <Button dark>SIGN UP </Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink to="/sign-out">
                  <Button fontBig primary>
                    SIGN UP
                  </Button>
                </NavBtnLink>
              )}
            </NavItemBtn>
          </NavMenu>
        </NavbarConteiner>
      </Nav>
    </>
  );
};

export default Navbar;
