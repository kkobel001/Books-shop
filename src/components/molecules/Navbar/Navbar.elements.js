import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Container } from '../../../theme/GlobalStyle';

export const Nav = styled.div`
  position: sticky;
  z-index: 99999;
  font-size: 20px;
  justify-content: center;
  height: 100px;
  align-items: center;
  display: flex;
  background-color: #f8f9fa;
`;

export const NavbarConteiner = styled(Container)`
  display: flex;
  justify-content: space-between;
  overflow: visible;
  ${Container}
`;
export const NavLogo = styled.div`
  background-color: transparent;
  justify-content: center;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 150px;
  height: 80px;
`;
export const NavLinksLogo = styled(NavLink)`
  margin-left: auto;
  margin-right: auto;
`;
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavItem = styled.li`
  height: 50px;
  border-bottom: 2px solid transparent;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 30px;
  margin-top: 10px;
  padding-top: 10px;
  @media screen and (max-width: 960px) {
    margin-top: 15px;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding-left: 15px;

  @media screen and (max-width: 1230px) {
    padding-left: 60px;
    grid-template-columns: auto auto auto auto;
  }

  @media screen and (max-width: 960px) {
    overflow: visible;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 100px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background-color: #4e5938;
  }
`;

export const NavLinks = styled(NavLink)`
  color: black;
  text-decoration: none;

  border-bottom: 2px solid transparent;
  margin-top: grid-auto-columns;
  margin-bottom: auto;

  &:hover {
    color: #bac237;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    color: #ffffff;

    &:hover {
      border: none;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justyfy-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
    margin-top: 15px;
    margin-right: 10%;
  }
`;

export const NavBtnLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 100%;
  width: 100%;
  border: none;
  padding: 8px 16px;
`;
