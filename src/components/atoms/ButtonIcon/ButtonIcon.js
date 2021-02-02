import React from 'react';
import styled from 'styled-components';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

// const ButtonIcon = styled.button`
// height: 34px;
// width: 34px;
// background-image: url (${({icon}) => icon });
// text-align: center;
// background-repeat: no-repeat;
// background-position: 50% 50%;
// background-size: 40%;

//     &:hover {
//       background-color: ${({ theme }) =>  theme.primary};
//     }

const StyledWrapper = styled.div`
justify-content:center;
  height: 34px;
  width: 350px;
  margin-top: 50px;
  padding-left: 120px;
  border-radius: ${({ light }) => (light ? '#ffffff' : '')}

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
    /* ${({ primary }) => (primary ? '#2b462e' : '#BAC237')} */
    &:hover {
      /* background-color: ${({ primary }) => (primary ? '#BAC237' : '#00fbff')}; */
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
