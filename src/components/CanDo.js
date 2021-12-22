import React from 'react';
import useNav from '../hooks/useNav';
import {CanDoWrpper} from '../styles/cando';
import {candoList} from '../utils/constant';
import {CANDO_IMG} from '../utils/images';

function CanDo() {
  const candoRef = useNav('cando');

  return (
    <CanDoWrpper id="candoContainer" ref={candoRef}>
      <img className="cando-img" src={CANDO_IMG} alt="can" />
      <div className="cando__list">
        {candoList.map((item) => {
          const {id, src, title} = item;
          return (
            <ul key={id}>
              <img className="cando-icon" src={src} alt={title} />
              <p>{title}</p>
            </ul>
          );
        })}
      </div>
    </CanDoWrpper>
  );
}

export default CanDo;
