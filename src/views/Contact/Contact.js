import React from 'react';
import styled from 'styled-components';
import UserPageTemplate from '../../templates/UserPageTemplates';
import Tittlebox from '../../components/atoms/Tittlebox/Tittlebox';
import { Button } from '../../components/atoms/Button/Button';
import SocialMedia from '../../components/atoms/SocialMedia/SocialMedia';
import useForm from './useForm';
import validate from './ValidateInfo';
import orangeFruit from '../../assets/images/instagram-img-03.jpg';
import Footer from '../../components/molecules/Footer/Footer';
import { Container } from '../../theme/GlobalStyle';

const StyledContainer = styled(Container)`
  ${Container};
  height: 800px;
  justify-content: center;
`;
const StyledWrapper = styled.div`
  width: 80%;
  height: 550px;
  padding-top: 150px;
  margin-left: auto;
  margin-right: auto;
  /* z-index:9999999; */

  display: flex;
  flex-wrap: wrap;

  text-align: center;
`;

const StyledFormInfo = styled.div`
  background: url(${orangeFruit});
  background-size: contain;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  z-index: 0;
  padding: 50px;
  flex: 40%;
  color: #ffffff;

  ::before {
    /* background-color: #222127; */
    content: '';
    /* position: absolute; */
    z-index: 0;
    opacity: 0.7;
    width: 100%;
    /* height: 400px; */
    left: 0px;
    top: 0px;
  }

  /* float:right; */
`;

const StyledForm = styled.div`
  background-color: #f1f1f1;
  padding: 50px;
  flex: 60%;

  /* width:400px;
     height:500px;
     background:#ccc;
     margin:0; */
`;
const StyledFormInput = styled.div`
  line-height: 60px;
`;
const StyledInput = styled.input`
  margin-top: auto;
  color: #1e00ff;
  & ::placeholder {
    margin-left: 6px;
  }
`;

const Contact = () => {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);

  return (
    <>
      <UserPageTemplate />
      <Tittlebox pagename="CONTACT" page="CONTACT" />
      <StyledContainer>
        <StyledWrapper>
          <StyledForm>
            <h1>GET IN TOUCH</h1>
            <StyledFormInput onSubmit={handleSubmit}>
              <label htmlFor="username">
                Your name
                <StyledInput id="username" type="text" name="username" placeholder=" Enter your name" value={values.username} onChange={handleChange} />
                {errors.username && <p>{errors.username}</p>}
              </label>
            </StyledFormInput>
            <StyledFormInput>
              <label htmlFor="email">Your Email</label>
              <input id="email" type="email" name="email" placeholder="Enter your username" value={values.email} onChange={handleChange} />
              {errors.email && <p>{errors.email}</p>}
            </StyledFormInput>
            <StyledFormInput>
              <label htmlFor="subject">Subject</label>
              <input id="subject" type="subject" name="subject" placeholder="Subject" value={values.subject} onChange={handleChange} />
            </StyledFormInput>
            <StyledFormInput>
              <label htmlFor="text">Your message</label>
              <textarea id="text" type="text" name="message" placeholder="Your message" value={values.text} onChange={handleChange} />
              {errors.text && <p>{errors.text}</p>}
            </StyledFormInput>
            <Button type="Submit">Send Message</Button>
          </StyledForm>
          <StyledFormInfo>
            <h1>Contact Info</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate.</p>

            <SocialMedia />
          </StyledFormInfo>
        </StyledWrapper>
      </StyledContainer>

      <Footer />
    </>
  );
};

export default Contact;
