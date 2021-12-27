import React from 'react';
import useNav from '../hooks/useNav';
import {AboutWrapper} from '../styles/about';
import {ABOUT_IMG, MIND_MAP, MINJI_IMG} from '../utils/images';

function About() {
  const aboutRef = useNav('about');

  return (
    <AboutWrapper id="aboutContainer" ref={aboutRef}>
      <img className="about-img" src={ABOUT_IMG} alt="about-img" />
      <div className="about__info">
        <img className="about-mindmap" src={MIND_MAP} alt="about-mindmap" />
        <img className="about-profile" src={MINJI_IMG} alt="about-profile" />
      </div>
      <p>
        저의 하루는,
        <br /> 전날 밤에 다음 하루의 <strong>계획</strong>을 세우는 것부터
        시작됩니다. <br />
        그리고 다음 날 <strong>약속</strong>된 <strong>시간</strong>에 맞춰
        나와,
        <br /> 맡은 업무에 <strong>책임감</strong>을 가지고,
        <br /> 오전 업무를 훨훨 털어버린 후, <br />
        <strong>도전</strong> 정신으로 안 먹어본 메뉴와 함께 행복한 점심 시간을
        보내요. <br />
        남은 일과를 <strong>끈기</strong>있게 끝냅니다. <br />
        "오늘도 나는 <strong>성장</strong>했구나 !"
        <br /> 매일의 나의 성취 <strong>목표</strong>를 세우며 <br />{' '}
        <strong>안정</strong>된 하루의 행복을 느끼며 잠에 듭니다 ✨
      </p>
    </AboutWrapper>
  );
}

export default About;
