import React, { useState } from 'react';
import styled from 'styled-components';
import UserPageTemplate from '../../templates/UserPageTemplates';
import Tittlebox from '../../components/atoms/Tittlebox/Tittlebox';
import Form from './Form';
import Footer from '../../components/molecules/Footer/Footer';
import { Container } from '../../theme/GlobalStyle';
import FormMessageSuccess from './FormMessageSuccess';

const StyledContainer = styled(Container)`
  ${Container};
  height: 100%;
  justify-content: center;

  @media screen and (min-width: 1580px) {
    height: auto;
  }
  @media screen and (min-width: 1280px) {
    display: block;
    width: 70%;
  }
`;
const StyledWrapper = styled.div`
  width: 80%;
  /* height: 550px; */
  margin-top: 150px;
  margin-bottom: 150px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
`;

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <UserPageTemplate />
      <Tittlebox pagename="CONTACT" page="CONTACT" />
      <StyledContainer>
        <StyledWrapper>{!isSubmitted ? <Form submitForm={submitForm} /> : <FormMessageSuccess />}</StyledWrapper>
      </StyledContainer>

      <Footer />
    </>
  );
};

export default Contact;
