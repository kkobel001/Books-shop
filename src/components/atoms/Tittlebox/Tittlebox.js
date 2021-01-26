import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImageBackground from '../../../assets/images/all-bg-title.jpg';

const StyledBox = styled.div`
  width: 100%;
  height: 300px;
  background: url(${ImageBackground});
  background-size: contain;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  z-index: 0;

  ::before {
    background: rgba(0, 0, 0, 0.6);
    content: '';
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 400px;
    left: 0px;
    top: 0px;
  }
`;

const StyledRow = styled.div`
  position: relative;
  width: 70%;
  height: 60px;
  background-color: transparent;
  z-index: 99999;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-gap: 1em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  color: #ffffff;

  & h2 {
    margin-top: auto;
    margin-bottom: auto;
  }

  & ul {
    list-style-type: none;
    font-size: 18px;
    background-color: #bac237;
    padding: 15px 15px 15px 15px;
    width: 200px;
  }

  & li {
    float: left;
  }
  & p {
    color: #000000;

    ::before {
      content: ' /';
      padding-left: 5px;
      padding-right: 5px;
    }
  }

  & a {
    text-decoration: none;
    color: #ffffff;
  }
`;

const StyledButtom = styled.div`
  float: left;
`;

const Tittlebox = ({ pagename, page }) => (
  <StyledBox>
    <StyledRow>
      <h2>{pagename}</h2>
      <ul>
        <li>
          <a href="./">Home</a>
        </li>
        <li>
          <p>{page}</p>
        </li>
      </ul>
      <StyledButtom>
        {/* <Link to="./" />
         */}
      </StyledButtom>
    </StyledRow>
  </StyledBox>
);

Tittlebox.propTypes = {
  pagename: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

export default Tittlebox;
