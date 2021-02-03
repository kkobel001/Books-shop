import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const StyledWrapper = styled.div`
  justify-content: center;
  height: 34px;
  width: 350px;
  margin-top: 30px;
  padding-left: 120px;
  border-radius: ${({ light }) => (light ? '#ffffff' : '')} & a {
    text-decoration: none;
  }
  & ul {
    height: 100%;
    list-style-type: none;
    /* padding-left:40px;
    padding-right:40px; */
  }
  & li {
    float: left;
    /* height: 34px; */
    width: 34px;
    margin-right: 3px;
    text-align: center;
    padding-top: 6px;
    &:hover {
      background-color: ${({ primary }) => (primary ? 'transparent' : '#BAC237')};
    }
  }
`;

export const StyledFavoriteBorderIcon = styled(NavLink)`
  color: #000000;

  :hover {
    color: #ffffff;
  }
`;

const ButtonIcon = () => (
  <StyledWrapper>
    <ul>
      <li>
        <StyledFavoriteBorderIcon to="./">
          <FavoriteBorderIcon />
        </StyledFavoriteBorderIcon>
      </li>
      <li>
        <StyledFavoriteBorderIcon to="./">
          <VisibilityIcon />
        </StyledFavoriteBorderIcon>
      </li>
      <li>
        <StyledFavoriteBorderIcon to="./">
          <ChatBubbleOutlineIcon />
        </StyledFavoriteBorderIcon>
      </li>
    </ul>
  </StyledWrapper>
);

export default ButtonIcon;
