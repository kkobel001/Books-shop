import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/molecules/Navbar';

const UserPageTemplate = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UserPageTemplate;
