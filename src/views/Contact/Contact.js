import React from 'react';
import styled from 'styled-components';
import UserPageTemplate from '../../templates/UserPageTemplates';
import Tittlebox from '../../components/atoms/Tittlebox/Tittlebox';
import { Button } from '../../components/atoms/Button/Button';
// import SocialMedia from '../../components/atoms/SocialMedia/SocialMedia'
import useForm from './useForm';
import validate from './ValidateInfo';

// const StyledFormInfo= styled.div `
// margin:0;
// `;

const StyledFormInput = styled.div`
  margin: 0px;
`;
const Contact = () => {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);

  return (
    <>
      <UserPageTemplate />
      <Tittlebox pagename="CONTACT" page="CONTACT" />
      <form>
        <h1>GET IN TOUCH</h1>
        <StyledFormInput onSubmit={handleSubmit}>
          <label htmlFor="username">
            Your name
            <input id="username" type="text" name="username" placeholder=" Enter your name" value={values.username} onChange={handleChange} />
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
      </form>
    </>
  );
};

export default Contact;
