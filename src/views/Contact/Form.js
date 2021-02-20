import React from 'react';
import styled from 'styled-components';
import { Button } from '../../components/atoms/Button/Button';
import SocialMedia from '../../components/atoms/SocialMedia/SocialMedia';
import useForm from './useForm';
import validate from './validateInfo';
import orangeFruit from '../../assets/images/instagram-img-03.jpg';

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
  height: 550px;
  position: relative;
  width: 100%;

  ::before {
    background: rgba(0, 0, 0, 0.8);
    content: ''; // ::before and ::after both require content
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    z-index: 0;
  }
`;

const StyledForm = styled.form`
  background-color: #f1f1f1;
  padding: 50px;
  flex: 60%;
`;
const StyledFormInput = styled.div`
  line-height: 60px;

  /* &::placeholder{
    background-color: #015B2D;
  } */
`;
const StyledInput = styled.input`
  margin-top: auto;
  color: #064e2a;
  display: block;
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
`;
const StyledLabel = styled.div`
  display: inline-block;
  width: 100%;
  margin-bottom: 3px;

  & p {
    text-align: left;
  }
`;

const Form = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(validate);
  // const [isSubmiited, setIsSubmitted] = useState(false);

  // function submitForm(){
  //   setIsSubmitted(true);
  // };
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
          <label htmlFor="email">
            <p>Your Email</p>
          </label>
          <StyledInput id="email" type="email" name="email" placeholder="Enter your username" value={values.email} onChange={handleChange} />
          {errors.email && <p>{errors.email}</p>}
        </StyledFormInput>
        <StyledFormInput>
          <label htmlFor="email">
            <p>Subject</p>
          </label>
          <StyledInput id="subject" type="subject" name="subject" placeholder="Subject" value={values.subject} onChange={handleChange} />
        </StyledFormInput>
        <StyledFormInput>
          <label htmlFor="email">
            <p>Your Email</p>
          </label>
          <StyledInput id="message" type="message" name="message" placeholder="Enter your your message" value={values.message} onChange={handleChange} />
          {errors.message && <p>{errors.message}</p>}
        </StyledFormInput>

        <Button
          type="Submit"
          // {!isSubmitted ? (<FormMessageSuccess submitForm={submitForm} /> : )}
        >
          Send Message
        </Button>
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

export default Form;
