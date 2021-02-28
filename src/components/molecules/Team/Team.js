import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container } from '../../../theme/GlobalStyle';
import human01 from '../../../assets/images/img-1.jpg';
import human02 from '../../../assets/images/img-2.jpg';
import human03 from '../../../assets/images/img-3.jpg';

const StyledContainer = styled(Container)`
  margin-top: 100px;
  margin-bottom: 100px;
  width: 100%;
  ${Container}
`;
const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 40px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  width: 80%;

  @media screen and (max-width: 1500px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 1245px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 821px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const TeamContent = styled.div`
  color: #ffffff;
  width: 85%;
  filter: blur(5px);
  opacity: 0;
  transform: translateX(-50%) translateY(-50%);
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transition: all 0.4s ease 0.3s;
  ::after {
    content: '';
    border-bottom: 2px solid #b0b435;
    display: block;
    width: 100%;
    bottom: 3px;
    left: 0px;
    margin-left: auto;
    margin-right: auto;
  }
`;
const StyledItem = styled.div`
  width: 270px;
  text-align: center;
  overflow: hidden;
  position: relative;
  padding: 10px;
  height: 480px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.1);

  & p {
    line-height: 200%;
    justify-content: center;
    margin-top: 20px;
  }

  ::before,
  ::after {
    content: '';
    background: #333;
    transform: scale(0);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 0.5s ease 0s;
  }
  ::after {
    background: #000;
    border: 1px solid #aaa;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    transition: all 0.5s ease 0.2s;
  }
  :hover::before {
    opacity: 0.5;
    transform: scale(1);
  }
  :hover::after {
    opacity: 0.35;
    transform: scale(1);
  }
  :hover {
    ${TeamContent} {
      filter: blur(0);
      opacity: 1;
    }
  }
`;

const StyledImage = styled.img`
  width: 270px;
  height: 250px;
`;

const Team = ({ text }) => (
  <StyledContainer>
    <StyledWrapper>
      <StyledItem>
        <a href="./">
          <StyledImage src={human01} alt="human" />
          <TeamContent>
            <h2>Williamson</h2>
            <p>Web developer </p>
          </TeamContent>
        </a>
        <p>{text}</p>
      </StyledItem>
      <StyledItem>
        <StyledImage src={human02} alt="human" />
        <TeamContent>
          <h2>Kristina</h2>
          <p>Web developer </p>
        </TeamContent>
        <p>{text}</p>
      </StyledItem>
      <StyledItem>
        <StyledImage src={human03} alt="human" />
        <TeamContent>
          <h2>Steve Thomas</h2>
          <p>Web developer </p>
        </TeamContent>
        <p>{text}</p>
      </StyledItem>
      <StyledItem>
        <StyledImage src={human01} alt="human" />
        <TeamContent>
          <h2>Williamson</h2>
          <p>Web developer </p>
        </TeamContent>
        <p>{text}</p>
      </StyledItem>
    </StyledWrapper>
  </StyledContainer>
);

Team.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Team;
