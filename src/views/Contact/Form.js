import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from '../../components/atoms/Button/Button';
import SocialMedia from '../../components/atoms/SocialMedia/SocialMedia';
import useForm from './useForm';
import validate from './validateInfo';
import orangeFruit from '../../assets/images/instagram-img-03.jpg';

const StyledForm = styled.form`
  background-color: #f1f1f1;
  padding: 50px;
  flex: 60%;
  @media screen and (max-width: 1400px) {
    flex: 100%;
  }
`;
const StyledFormInput = styled.div`
  line-height: 60px;

  /* &::placeholder{
  background-color: #015B2D;
} */
`;
const StyledLabel = styled.div`
  /* display: inline-block; */
  width: 100%;
  margin-bottom: 3px;

  & p {
    text-align: left;
  }
`;
const StyledInput = styled.input`
  margin-top: auto;
  color: #064e2a;
  /* display: block; */
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 40px;
  width: 100%;
  border: none;

  /* background-color: #015b2d; */
  &::placeholder {
    font-size: 12px;
  }
`;
const StyledFormInfo = styled.div`
  background: url(${orangeFruit});
  background-size: contain;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  padding: 50px;
  flex: 40%;
  color: #ffffff;
  justify-content: center;
  position: relative;
  width: 100%;

  ::before {
    background: rgba(0, 0, 0, 0.8);
    content: '';
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    z-index: 0;
  }
  @media screen and (max-width: 1400px) {
    height: 300px;
    margin-top: 50px;
  }
  @media screen and (max-width: 1280px) {
    /* display: block;
      width: 100%; */
  }
`;

const StyledFormText = styled.div`
  position: relative;
  padding-top: 85px;
  padding-bottom: 100px;
  height: 100%;

  & p {
    line-height: 200%;
    text-align: justify;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 1400px) {
    padding: 0px;
    font-size: 15px;
    padding-bottom: 10px;
  }
  @media screen and (max-width: 605px) {
    font-size: 13px;
  }
`;

const Form = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(submitForm, validate);
  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <h1>GET IN TOUCH</h1>
        <StyledFormInput>
          <StyledLabel htmlFor="username">
            <p>Your name</p>
          </StyledLabel>
          <StyledInput id="username" type="text" name="username" placeholder=" Enter your name" value={values.username} onChange={handleChange} />
          {errors.username && <p>{errors.username}</p>}
        </StyledFormInput>
        <StyledFormInput>
          <StyledLabel htmlFor="email">
            <p>Your Email</p>
          </StyledLabel>
          <StyledInput id="email" type="email" name="email" placeholder="Enter your username" value={values.email} onChange={handleChange} />
          {errors.email && <p>{errors.email}</p>}
        </StyledFormInput>
        <StyledFormInput>
          <StyledLabel htmlFor="email">
            <p>Subject</p>
          </StyledLabel>
          <StyledInput id="subject" type="subject" name="subject" placeholder="Subject" value={values.subject} onChange={handleChange} />
        </StyledFormInput>
        <StyledFormInput>
          <StyledLabel htmlFor="email">
            <p>Your Email</p>
          </StyledLabel>
          <StyledInput id="message" type="message" name="message" placeholder="Enter your your message" value={values.message} onChange={handleChange} />
          {errors.message && <p>{errors.message}</p>}
        </StyledFormInput>
        <Button type="Submit">Send Message</Button>
      </StyledForm>
      <StyledFormInfo>
        <StyledFormText>
          <h1>Contact Info</h1>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate.</p>
          <SocialMedia />
        </StyledFormText>
      </StyledFormInfo>
    </>
  );
};

Form.propTypes = {
  submitForm: PropTypes.func.isRequired,
};

export default Form;
