import React from 'react';
import {HeroWrapper} from '../styles/hero';

function Hero() {
  return (
    <HeroWrapper>
      <img alt="Growing Tree" title="Growing Tree" src="assets/amb-load.svg" />
      <h1>
        " 나무 같은 개발자 🌳 " 김민지 입니다 <br />
        사계절 내내 같은 자리에 서서
        <br />
        묵묵히 자신의 일을 해내며,
        <br />
        자신의 모습을 찬란하게 변화시키는 나무처럼
        <br />
        꿋꿋하게 매일, 매 순간,
        <br />
        성장 해나가고, 배워 나가고 있습니다
      </h1>
    </HeroWrapper>
  );
}

export default Hero;
