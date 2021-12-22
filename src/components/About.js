import React from 'react';
import {AboutWrapper} from '../styles/about';
import {ABOUT_IMG, MINJI_IMG} from '../utils/images';

function About({id}) {
  return (
    <AboutWrapper id={id}>
      <img className="about-img" src={ABOUT_IMG} alt="about-img" />
      <div className="about__info">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam a ipsa
          veritatis reiciendis omnis nostrum eligendi labore quae veniam minus.
          At tempora maxime exercitationem architecto. Amet, eveniet doloremque!
          Ullam voluptatem itaque perferendis maxime repudiandae? Animi tempora
          accusamus molestias quaerat. Nulla necessitatibus aspernatur esse
          accusamus debitis itaque ut nesciunt excepturi minus?
        </p>
        <img className="about-profile" src={MINJI_IMG} alt="about-profile" />
      </div>
    </AboutWrapper>
  );
}

export default About;
