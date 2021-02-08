import React from 'react';
import styled from 'styled-components';
import UserPageTemplate from '../../templates/UserPageTemplates';
import Tittlebox from '../../components/atoms/Tittlebox/Tittlebox';
import { Button } from '../../components/atoms/Button/Button';
// import SocialMedia from '../../components/atoms/SocialMedia/SocialMedia'

// const StyledFormInfo= styled.div `
// margin:0;
// `;

const StyledFormInput = styled.div`
  margin: 0px;
`;
const Contact = () => {};

<>
  <UserPageTemplate />
  <Tittlebox pagename="CONTACT" page="CONTACT" />
  <form>
    <h1>GET IN TOUCH</h1>
    <StyledFormInput>
      <label htmlFor="username">
        Your name
        <input
          id="username"
          type="text"
          name="username"
          placeholder=" Enter your name"
          // value={values.username}
        />
      </label>
    </StyledFormInput>
    <StyledFormInput>
      <label htmlFor="email">Your Email</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Enter your username"
        // value={values.email}
      />
    </StyledFormInput>
    <StyledFormInput>
      <label htmlFor="subject">Email</label>
      <input
        id="subject"
        type="text"
        name="Subject"
        placeholder="Subject"
        // value={values.subject}
      />
    </StyledFormInput>
    <StyledFormInput>
      <label htmlFor="text">Your message</label>
      <textarea
        id="text"
        type="text"
        name="message"
        placeholder="Your message"
        // value={values.text}
      />
    </StyledFormInput>
    <Button type="Submit">Send Message</Button>
  </form>
  {/* <StyledFormInfo>
      <h1>Contact Info</h1>
      <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate.</p>
      <SocialMedia />
    </StyledFormInfo> */}
</>;

export default Contact;
