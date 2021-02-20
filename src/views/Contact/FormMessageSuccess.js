import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SuccessImage from '../../assets/images/gallery-img-09.jpg';
import { Button } from '../../components/atoms/Button/Button';
import { Container } from '../../theme/GlobalStyle';

const StyledContainer = styled(Container)`
  ${Container};
  height: 700px;
  justify-content: center;
  margin: 0px;
`;

const StyledWrapper = styled.div`
  justify-content: center;
  height: 550px;
  width: 700px;
  margin: auto auto auto auto;

  & h2 {
    font-size: 30px;
    letter-spacing: 2px;
    margin-bottom: 30px;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    color: ${({ theme }) => theme.primary};
  }

  & a {
    text-decoration: none;
  }
`;

const StyledMes = styled.img`
  width: 100%;
  height: 400px;
  box-shadow: 4px 4px 9px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 10px;
`;

const FormMessageSuccess = () => (
  <StyledContainer>
    <StyledWrapper>
      <h2>Message was sent ! </h2>
      <StyledMes src={SuccessImage} alt="imgmessage" />
      <Link to="/home">
        <Button dark>Home </Button>
      </Link>
    </StyledWrapper>
  </StyledContainer>
);

export default FormMessageSuccess;
