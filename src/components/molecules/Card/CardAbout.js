import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../theme/GlobalStyle';
import aboutImg from '../../../assets/images/about-img.jpg';
import { Button } from '../../atoms/Button/Button';

const StyledContainer = styled(Container)`
  margin: auto;
  height: 100%;
  width: 100%;

  ${Container}
`;

const StyledWrapper = styled.div`
  width: 80%;

  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
`;
const StyledTopCard = styled.div`
  display: flex;
  flex-wrap: initial;
  text-align: center;
  margin-bottom: 100px;

  @media screen and (max-width: 1300px) {
    display: block;
  }
`;
const StyledAboutImg = styled.img`
  height: 600px;
  width: 690px;

  @media screen and (max-width: 1580px) {
    margin-right: 30px;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 1280px) {
    margin-right: 0px;
    margin-bottom: 30px;
  }
`;

const Text = styled.div`
  margin-left: 100px;
  line-height: 200%;
  height: 100%;
  width: 600px;
  text-align: justify;

  & p {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 1580px) {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 80px;
    font-size: 13px;
    width: 690px;
  }
`;

const StyledList = styled.ul`
  margin: 20px 0px 40px 0px;
  list-style-type: none;
  display: grid;
  grid-template-columns: auto auto auto auto;
  margin-top: 60px;
  height: 170px;
  text-align: center;
  width: 100%;

  & li {
    max-width: 350px;
    transition: background-color 0.5s ease;
    margin-right: auto;
    margin-left: auto;

    ::before {
      content: '';
      border-bottom: 4px solid #000000;
      display: block;
      width: 100%;
      bottom: 3px;
      left: 0px;
      margin-left: auto;
      margin-right: auto;
    }

    :hover {
      background-color: #b0b435;
      color: #ffffff;
      box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.1);
    }
  }
  & h2 {
    margin-top: 4px;
  }

  & p {
    line-height: 140%;
    height: 100%;
    margin-top: 30px;
    text-align: justify;
    padding: 0px 15px 15px 15px;
  }
`;

const CardAbout = () => (
  <StyledContainer>
    <StyledWrapper>
      <StyledTopCard>
        <StyledAboutImg src={aboutImg} alt="img" />
        <Text>
          <h1>WE ARE FRESHSHOP</h1>
          <p>
            ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
            quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur
          </p>
          <Button>Read More</Button>
        </Text>
      </StyledTopCard>
      <StyledList>
        <li>
          <h2>WE ARE TRUSTED</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </li>
        <li>
          <h2>WE ARE TRUSTED</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </li>
        <li>
          <h2>WE ARE TRUSTED</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </li>
      </StyledList>
    </StyledWrapper>
  </StyledContainer>
);

export default CardAbout;
