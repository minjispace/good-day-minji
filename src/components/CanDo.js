import React from 'react';
import useNav from '../hooks/useNav';
import {CanDoWrpper} from '../styles/cando';
import {candoList} from '../utils/constant';
import {CANDO_IMG} from '../utils/images';

function CanDo() {
  const candoRef = useNav('cando');

  return (
    <CanDoWrpper id="candoContainer" ref={candoRef}>
      <img src={CANDO_IMG} alt="can" />
      <div className="cando__list">
        {candoList.map((item) => {
          const {id, icon, title, content} = item;
          return (
            <ul key={id}>
              <span className="cando-icon">{icon}</span>
              <h3>{title}</h3>
              <p>{content}</p>
            </ul>
          );
        })}
      </div>
    </CanDoWrpper>
  );
}

export default CanDo;
