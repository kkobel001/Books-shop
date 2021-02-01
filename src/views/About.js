import React from 'react';
import Tittlebox from '../components/atoms/Tittlebox/Tittlebox';
import CardAbout from '../components/molecules/Card/CardAbout';
import Team from '../components/molecules/Team/Team.js';
import Footer from '../components/molecules/Footer/Footer';

const About = () => (
  <>
    <Tittlebox pagename="ABOUT US" page="ABOUT US" />
    <CardAbout />
    <Team text="dolor sit amet, consectetur adipiscing elit. urna diam, maximus ut ullamcorper quis, uis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate " />
    <Footer />
  </>
);

export default About;
