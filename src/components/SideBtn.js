import React, {useState} from 'react';
import {useEffect} from 'react';
import {useGlobalContext} from '../context/AppContext';
import {SideWrapper} from '../styles/sideBtn';
import {HEADER_IMG} from '../utils/images';

const SideBtn = () => {
  const {handleScrollTop} = useGlobalContext();
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const height = window.scrollY;
    if (height > 250) {
      setActive(height);
    } else {
      setActive(0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SideWrapper>
      <img
        onClick={handleScrollTop}
        className={active ? 'arrowup active' : 'arrowup'}
        src={HEADER_IMG}
        alt="side-img"
      />
    </SideWrapper>
  );
};

export default SideBtn;
