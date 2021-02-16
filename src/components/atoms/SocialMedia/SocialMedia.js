import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
// import {margL} from '../../theme/Margintheme';

const StyledWrapper = styled.div`
  height: 37px;
  width: 100%px;
  text-align: center;
 /* margin-left: ${({ margL }) => (margL ? '40px' : '30px')}; */
`;

const Styledul = styled.ul`
  height: 100%;
  list-style-type: none;
  text-align: center;
  & li {
    float: left;
    height: 37px;
    width: 37px;
    margin-right: 3px;
    background-color: transparent;
    padding-top: 20px;
    margin-right: 15px;
  }
`;

const StyledFacebookIcon = styled(FacebookIcon)`
  color: #ffffff;
  font-size: 20px;
  &:hover {
    color: #bac237;
  }
`;
const StyledTwitterIcon = styled(TwitterIcon)`
  color: #ffffff;
  font-size: 20px;
  &:hover {
    color: #bac237;
  }
`;
const StyledWhatsAppIcon = styled(WhatsAppIcon)`
  color: #ffffff;
  font-size: 20px;
  &:hover {
    color: #bac237;
  }
`;
const StyledInstagramIcon = styled(InstagramIcon)`
  color: #ffffff;
  font-size: 20px;
  &:hover {
    color: #bac237;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  height: 100%;
`;

const SocialMedia = () => (
  <StyledWrapper>
    <Styledul>
      <li>
        <StyledLink to="./">
          <StyledFacebookIcon />
        </StyledLink>
      </li>
      <li>
        <StyledLink to="./">
          <StyledTwitterIcon />
        </StyledLink>
      </li>
      <li>
        <StyledLink to="./">
          <StyledWhatsAppIcon />
        </StyledLink>
      </li>
      <li>
        <StyledLink to="./">
          <StyledFacebookIcon />
        </StyledLink>
      </li>
      <li>
        <StyledLink to="./">
          <StyledInstagramIcon />
        </StyledLink>
      </li>
    </Styledul>
  </StyledWrapper>
);

export default SocialMedia;
