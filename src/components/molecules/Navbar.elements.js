import styled from 'styled-components';
import { Container } from '../../theme/GlobalStyle';

export const Nav = styled.div`
  position: sticky;
  z-index: 999;
  font-size: 20px;
  justify-content: center;
  height: 100px;
  align-items: center;
  display: flex;
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
  height: 100px;
  margin-left: auto;
  margin-right: auto;
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #4b59f7;
  }
`;

export const NavLinks = styled.ul`
  color: black;
  text-decoration: none;
  height: 80pc;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #4b59f7;
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

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

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
