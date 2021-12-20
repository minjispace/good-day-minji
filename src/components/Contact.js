import React from 'react';
import styled from 'styled-components';

function Contact({id}) {
  console.log(id, 'id');
  return (
    <Wrapper id={id} className="curved-div">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#9b7454"
          fillOpacity="1"
          d="M0,160L120,138.7C240,117,480,75,720,69.3C960,64,1200,96,1320,112L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>

      <div className="curved-info">
        <h1>Hello World</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci
          lorem, porttitor nec vulputate sit amet, fermentum a purus....
        </p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: white;
  color: black;
  text-align: center;
  margin-top: 10rem;
  .curved-info {
    position: relative;
    padding-top: 100px;
  }
  h1 {
    margin: 0;
  }
  svg {
    display: block;
    position: absolute;
  }
`;
export default Contact;
