import React from 'react';
import {AboutWrapper} from '../styles/about';
import {HERO_IMG1} from '../utils/images';

function About({id}) {
  return (
    <AboutWrapper id={id}>
      <h1>About me</h1>
      <div className="hero__info">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam a ipsa
          veritatis reiciendis omnis nostrum eligendi labore quae veniam minus.
          At tempora maxime exercitationem architecto. Amet, eveniet doloremque!
          Ullam voluptatem itaque perferendis maxime repudiandae? Animi tempora
          accusamus molestias quaerat. Nulla necessitatibus aspernatur esse
          accusamus debitis itaque ut nesciunt excepturi minus?
        </p>
        <img src={HERO_IMG1} alt="hero-img" />
      </div>
    </AboutWrapper>
  );
}

export default About;
