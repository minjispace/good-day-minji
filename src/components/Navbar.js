import React from 'react';
import {useGlobalContext} from '../context/AppContext';
import {HEADER_IMG} from '../utils/images';

function Navbar({scrollToId, navLinkId, id, title, url}) {
  const {activeNavLinkId, handleClick} = useGlobalContext();

  return (
    <li url={url} key={id} onClick={() => handleClick(scrollToId, navLinkId)}>
      {activeNavLinkId === navLinkId ? (
        <img src={HEADER_IMG} alt="tree" />
      ) : null}
      {title}
    </li>
  );
}

export default Navbar;
