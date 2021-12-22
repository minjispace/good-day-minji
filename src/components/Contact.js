import React from 'react';
import useNav from '../hooks/useNav';
import {ContactWrapper} from '../styles/contact';
import {CONTACT_IMG} from '../utils/images';

function Contact() {
  const contactRef = useNav('contact');

  return (
    <ContactWrapper id="contactContainer" ref={contactRef}>
      <svg
        className="contact-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#9b7454"
          fillOpacity="1"
          d="M0,224L60,202.7C120,181,240,139,360,112C480,85,600,75,720,64C840,53,960,43,1080,64C1200,85,1320,139,1380,165.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <div className="contact-empty"></div>

      <div className="contact-info">
        <img src={CONTACT_IMG} alt="contact-img" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci
          lorem, porttitor nec vulputate sit amet, fermentum a purus....
        </p>
      </div>
    </ContactWrapper>
  );
}

export default Contact;
