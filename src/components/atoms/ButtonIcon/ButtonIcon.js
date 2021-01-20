import React from 'react';
import styled from 'styled-components';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const StyledWrapper = styled.div`
  height: 34px;
  width: 350px;
  margin-top: 50px;
  padding-left: 120px;

  & a {
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
    height: 34px;
    width: 34px;
    margin-right: 3px;
    background-color: #000000;
    text-align: center;

    &:hover {
      background-color: #bac237;
    }
  }
`;

const StyledFavoriteBorderIcon = styled(FavoriteBorderIcon)`
  color: #ffffff;
  margin-top: 3.5px;
`;
const StyledVisibilityIcon = styled(VisibilityIcon)`
  color: #ffffff;
  margin-top: 3.5px;
`;

const StyledChatBubbleOutlineIcon = styled(ChatBubbleOutlineIcon)`
  color: #ffffff;
  margin-top: 3.5px;
`;

const ButtonIcon = () => (
  <StyledWrapper>
    <ul>
      <li>
        <a href="./">
          <StyledFavoriteBorderIcon />
        </a>
      </li>
      <li>
        <a href="./">
          <StyledVisibilityIcon />
        </a>
      </li>
      <li>
        <a href="./">
          <StyledChatBubbleOutlineIcon />
        </a>
      </li>
    </ul>
  </StyledWrapper>
);

export default ButtonIcon;
