import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../theme/GlobalStyle';
import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';
// import  SocialMediaIcons  from '../../atoms/SocialMediaIcons/SocialMediaIcons';

const StyledContainer = styled(Container)`
  height: 720px;

  background-color: rgb(1, 1, 1);
`;
const StyledWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
  padding: 10px;
  color: #ffffff;
  font-size: 13px;
  & h3 {
    font-size: 20px;
    padding-bottom: 15px;
  }
  & h3::before {
    content: 'gggggg ';
    border-bottom: 3px solid #b0b435;
    height: 3px;
    width: 50%;
    /* position: absolute; */
    bottom: 3px;
    left: 0px;
  }

  & ul {
    list-style-type: none;
    font-size: 16px;
  }
`;
const CardInfo = styled.div`
  height: 380px;
  padding: 40px 0;
`;

// const InfoFooter= styled.div`
// text-align: center;
// `;

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
        <Input type="tel" id="phone" name="email" placeholder="Newletter" />
        <Button>Submit</Button>
      </CardInfo>
      <CardInfo>
        <h3>Social Media</h3>
        {/* <SocialMediaIcons /> */}
      </CardInfo>

      <CardInfo>
        <h3>Social Media</h3>
      </CardInfo>
      <CardInfo>
        <h3>Social Media</h3>
      </CardInfo>
      <CardInfo>
        <h3>Social Media</h3>
      </CardInfo>

      {/* 
    <InfoFooter>All Rights Reserved. © 2018 ThewayShop Design By : html design</InfoFooter> */}
    </StyledWrapper>
  </StyledContainer>
);

export default Footer;
