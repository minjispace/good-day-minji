import React, {useState} from 'react';
import {useEffect} from 'react';
import {BsGithub, SiNotion} from '../icons/icons';
import {AsideWrapper} from '../styles/aside';
import {headerList} from '../utils/constant';

const Aside = () => {
  const [active, setActive] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('url');
    const location = document.querySelector(target).offsetTop;
    window.scrollTo({
      left: 0,
      top: location,
    });
  };

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

  return (
    <AsideWrapper>
      <ul>
        {headerList.map((item) => {
          const {id, title, url} = item;
          return (
            <li url={url} key={id} onClick={handleClick}>
              {title}
            </li>
          );
        })}
        <li>
          <BsGithub />
        </li>
        <li>
          <SiNotion />
        </li>
      </ul>
    </AsideWrapper>
  );
};

export default Aside;
