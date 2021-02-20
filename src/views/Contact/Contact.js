import React from 'react';
import styled from 'styled-components';
import UserPageTemplate from '../../templates/UserPageTemplates';
import Tittlebox from '../../components/atoms/Tittlebox/Tittlebox';
import Form from './Form';
import Footer from '../../components/molecules/Footer/Footer';
import { Container } from '../../theme/GlobalStyle';
// import FormMessageSuccess from './FormMessageSuccess';

const StyledContainer = styled(Container)`
  ${Container};
  height: 700px;
  justify-content: center;
`;
const StyledWrapper = styled.div`
  width: 80%;
  height: 550px;
  margin-top: 150px;
  margin-bottom: 150px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
`;

const Contact = () => (
  <>
    <UserPageTemplate />
    <Tittlebox pagename="CONTACT" page="CONTACT" />
    <StyledContainer>
      <StyledWrapper>
        <Form />
      </StyledWrapper>
    </StyledContainer>

    <Footer />
  </>
);

// Contact.propTypes = {
//   margL: PropTypes.string.isRequired,
// };
export default Contact;
