import React from 'react';
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
      <Header />
      <Aside />
      <SideBtn />
      <Hero />
      <About />
      <Projects />
      <CanDo />
      <Contact />
    </>
  );
}

export default Home;
