import React from 'react';
import styled from 'styled-components';
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Container } from '../../../theme/GlobalStyle';
import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';
import SocialMedia from '../../atoms/SocialMedia/SocialMedia';

const StyledContainer = styled(Container)`
  height: 100%;
  background-color: rgb(1, 1, 1);
`;
const StyledWrapper = styled.div`
  margin-left: 100px;
  margin-right: 100px;
  height: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
  color: #ffffff;
  font-size: 16px;
  & h3 {
    font-size: 20px;
    padding-bottom: 15px;
  }
  & h3::after {
    content: '';
    border-bottom: 2px solid #b0b435;
    display: block;
    width: 30vh;
    margin-top: 10px;
    bottom: 3px;
    left: 0px;
  }

  & ul {
    list-style-type: none;
  }
  & li {
    padding-top: 20px;
  }
  & p {
    word-wrap: break-word;
    max-width: 300px;
    line-height: 1.80857;
  }

  @media screen and (max-width: 1290px) {
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 720px) {
    align-items: center;
    grid-template-columns: repeat(1, 1fr);
  }
`;
const CardInfo = styled.div`
  height: 380px;
  padding: 40px 0;

  @media screen and (max-width: 1230px) {
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (max-width: 720px) {
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    height: 300px;
  }
`;
const StyledNewsletter = styled.div`
  display: inline-block;
`;
const StyledButton = styled(Button)`
  margin-top: 10px;
`;

const InfoFooter = styled.div`
  text-align: center;
  /* font-size: 14px; */
  /* background-color: #060606; */
  width: 100%;
  height: 40px;
  color: #ffffff;
  margin-left: 0px;
  margin-right: 0px;
  ::before {
    content: '';
    border-bottom: 2px solid #b0b435;
    display: block;
    width: 100%;
    bottom: 3px;
    left: 0px;
  }
  & p {
    padding-top: 15px;
    margin-bottom: 10px;
  }
`;

const StyledInformation = styled.ul`
  & a {
    text-decoration: none;
    color: #ffffff;
  }
  & a:hover {
    color: #b0b435;
  }
`;
const StyledContact = styled.ul``;

const Footer = () => (
  <StyledContainer>
    <StyledWrapper>
      <CardInfo>
        <h3>Business Time</h3>
        <ul>
          <li>Monday - Friday: 08.00am to 05.00pm</li>
          <li> Saturday: 10.00am to 08.00pm</li>
          <li>Sunday: Closed</li>
        </ul>
      </CardInfo>
      <CardInfo>
        <h3>Newsletter</h3>
        <StyledNewsletter>
          <Input type="tel" id="phone" name="email" placeholder="Newsletter" />
          <StyledButton>Submit</StyledButton>
        </StyledNewsletter>
      </CardInfo>
      <CardInfo>
        <h3>Social Media</h3>
        <SocialMedia />
      </CardInfo>

      <CardInfo>
        <h3>ABOUT FRESHSHOP</h3>
        <p>
          Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
      </CardInfo>
      <CardInfo>
        <h3>INFORMATION</h3>
        <StyledInformation>
          <li>
            <a href="./">About us</a>
          </li>
          <li>
            <a href="./">Costumers service</a>
          </li>
          <li>
            <a href="./">Our Sitmap</a>
          </li>
          <li>
            <a href="./">Delivery Information</a>
          </li>
        </StyledInformation>
      </CardInfo>
      <CardInfo>
        <h3>CONTACT US</h3>
        <StyledContact>
          <li>
            <p>
              <RoomIcon />
              Address: Michael I. Days 3756 Preston Street Wichita
            </p>
          </li>
          <li>
            <p>
              <PhoneIcon />
              Phone: +1-888 705 770
            </p>
          </li>
          <li>
            <p>
              <MailOutlineIcon />
              Email: contactinfo@gmail.com
            </p>
          </li>
        </StyledContact>
      </CardInfo>
    </StyledWrapper>
    <InfoFooter>
      <p>All Rights Reserved. © 2018 ThewayShop Design By : html design</p>
    </InfoFooter>
  </StyledContainer>
);

export default Footer;
