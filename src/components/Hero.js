import React from 'react';
import {HeroWrapper} from '../styles/hero';

function Hero() {
  return (
    <HeroWrapper>
      <img alt="Growing Tree" title="Growing Tree" src="assets/amb-load.svg" />
      <h1>
        " 나무 같은 개발자 🌳 " 김민지 입니다 .<br />
        나무를 좋아하고 , <br />
        나무가 숲을 이룬
        <br /> 초록 공간에서의 캠핑을 좋아하고 🏕,
        <br /> 초록색을 가장 좋아하는
        <br /> 매일, 매 순간,
        <br /> 성장 해나가고, 배워 나가고 있습니다.
      </h1>
    </HeroWrapper>
  );
}

export default Hero;
