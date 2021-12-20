import React, {useState} from 'react';
import {useEffect} from 'react';
import styled from 'styled-components';
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

const Btn = styled.div`
  .arrowup {
    position: fixed;
    bottom: 10px;
    right: 10px;
    margin: 20px;
    padding-top: 5px;
    width: 60px;
    height: 60px;
    transition: all 300ms linear;
    font-size: 30px;
    font-weight: bold;
    color: white;
    z-index: 100;
    border: transparent;
    text-align: center;
    pointer-events: none;
    opacity: 0;
    &:hover {
      transform: scale(0.95) rotate(10deg);
    }
  }
  .arrowup.active {
    opacity: 1;
    pointer-events: auto;
  }
`;

export default SideBtn;
