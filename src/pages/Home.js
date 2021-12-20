import React from 'react';
import styled from 'styled-components';
import {
  About,
  CanDo,
  Contact,
  Header,
  Hero,
  Projects,
  SideBtn,
} from '../components';
import Aside from '../components/Aside';

function Home() {
  return (
    <>
      <Header id="hero" />
      <Aside />
      <SideBtn />
      <Hero />
      <About id="about" />
      <CanDo id="cando" />
      <Projects id="projects" />
      <Contact id="contact" />
    </>
  );
}

export default Home;
