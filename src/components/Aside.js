import React, {useEffect, useState} from 'react';
import {AsideWrapper} from '../styles/aside';
import {asideIcon, headerList} from '../utils/constant';
import {HEADER_IMG} from '../utils/images';

const Aside = () => {
  const [active, setActive] = useState('#hero');
  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('url');
    setActive(target);
    const location = document.querySelector(target).offsetTop;
    window.scrollTo({
      left: 0,
      top: location,
    });
  };

  useEffect(() => {}, []);

  return (
    <AsideWrapper active={active}>
      <ul>
        {headerList.map((item) => {
          const {id, title, url} = item;
          return (
            <li url={url} key={id} onClick={handleClick}>
              {active === url ? <img src={HEADER_IMG} alt="tree" /> : null}
              {title}
            </li>
          );
        })}

        <div className="aside-icon">
          {asideIcon.map((item) => {
            const {id, href, icons} = item;
            return (
              <a key={id} href={href} target="_blank" rel="noreferrer">
                <div className="icon">{icons}</div>
              </a>
            );
          })}
        </div>
      </ul>
    </AsideWrapper>
  );
};

export default Aside;
