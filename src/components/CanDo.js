import React from 'react';
import {CanDoWrpper} from '../styles/cando';
import {CANDO_IMG} from '../utils/images';

function CanDo({id}) {
  return (
    <CanDoWrpper id={id}>
      <img src={CANDO_IMG} alt="can" />
    </CanDoWrpper>
  );
}

export default CanDo;
