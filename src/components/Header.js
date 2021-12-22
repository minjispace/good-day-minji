import React from 'react';

import {HeaderWrapper} from '../styles/header';

function Header({id}) {
  return (
    <HeaderWrapper id={id}>
      <div className="header-empty"></div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#6a9a3e"
          fillOpacity="1"
          d="M0,128L40,154.7C80,181,160,235,240,261.3C320,288,400,288,480,240C560,192,640,96,720,90.7C800,85,880,171,960,208C1040,245,1120,235,1200,208C1280,181,1360,139,1400,117.3L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>

      <div className="header-menu">
        <h2>Good day, Minji </h2>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
