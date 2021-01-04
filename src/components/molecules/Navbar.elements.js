import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Container } from '../../theme/GlobalStyle';

export const Nav = styled.div`
  position: sticky;
  z-index: 999;
  font-size: 20px;
  justify-content: center;
  height: 100px;
  align-items: center;
  display: flex;
  background-color: grey;
`;

export const NavbarConteiner = styled(Container)`
  display: flex;
  justify-content: space-between;

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
  height: 90px;
  margin-left: auto;
  margin-right: auto;
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 30px;
  margin-top: 10%;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin-top: auto;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

export const NavLinks = styled(NavLink)`
  color: black;
  text-decoration: none;
  height: 80px;
  border-bottom: 2px solid transparent;
  margin-top: grid-auto-columns;
  margin-bottom: auto;

  &:hover {
    border-bottom: 2px solid #bac237;
    color: #bac237;
  }
  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
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

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justyfy-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavBtnLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  padding: 8px 16px;
`;
