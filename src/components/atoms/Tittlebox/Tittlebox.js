import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
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
  width: 80%;
  height: 100px;
  padding-right: 100px;
  padding-left: 100px;
  background-color: #5c007a;
  z-index: 99999;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-gap: 1em;
  margin-left: auto;
  margin-right: auto;

  & h2 {
    color: #ffffff;
  }
`;

const StyledButtom = styled(Button)`
  float: left;
`;

const Tittlebox = ({ pagename, page }) => (
  <StyledBox>
    <StyledRow>
      <h2>{pagename}</h2>
      <StyledButtom>
        <p>
          <Link to="./" />
        </p>

        <p>{page}</p>
      </StyledButtom>
    </StyledRow>
  </StyledBox>
);

Tittlebox.propTypes = {
  pagename: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

export default Tittlebox;
