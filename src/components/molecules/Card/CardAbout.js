import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../theme/GlobalStyle';
import aboutImg from '../../../assets/images/about-img.jpg';
import { Button } from '../../atoms/Button/Button';

const StyledContainer = styled(Container)`
  margin: auto;
  height: 100%;
  width: 100%;
  margin: 100px;

  ${Container}
`;

const StyledWrapper = styled.div`
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
  flex-wrap: initial;
`;
const StyledAboutImg = styled.img`
  height: 600px;
  width: 690px;
`;

const Text = styled.div`
  margin-left: 100px;
  line-height: 200%;
  height: 100%;
  width: 600px;

  & p {
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

const StyledList = styled.div``;
const CardAbout = () => (
  <StyledContainer>
    <StyledWrapper>
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
    </StyledWrapper>

    <StyledList>
      <li>
        <h1>WE ARE TRUSTED</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </li>
      <li>
        <h1>WE ARE TRUSTED</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </li>
      <li>
        <h1>WE ARE TRUSTED</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </li>
    </StyledList>
  </StyledContainer>
);

export default CardAbout;
