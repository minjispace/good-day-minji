import styled from 'styled-components';

const AboutWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  place-content: center;
  align-items: center;
  margin: 9rem auto;
  p {
    font-size: 1.3rem;
    line-height: 3rem;
    letter-spacing: 0.2rem;
    max-width: 1100px;
    text-align: right;
  }
  strong {
    font-weight: bold;
  }
  .about-img {
    width: 750px;
    margin: 2rem auto;
  }
  .about-mindmap {
    z-index: -100;
    width: 1000px;
  }
  h1 {
    font-size: 3.5rem;
    font-family: 'Titillium Web', sans-serif;
    margin: 2rem auto;
  }
  .about__info {
    max-width: 80%;
    margin: 0rem auto;
    display: grid;
    grid-template-columns: auto auto;
    position: relative;

    .about-profile {
      height: 400px;
      position: absolute;
      left: 45%;
      top: 30%;
    }
  }
  @media screen and (max-width: 991px) {
    margin: 7rem auto;
    h1 {
      font-size: 2.5rem;
    }
    .about-img {
      width: 500px;
    }

    .about__info {
      max-width: 100%;
      grid-template-columns: auto;
      margin: 0 5rem;
      .about-profile {
        height: 300px;
        left: 40%;
      }
    }
    .about-mindmap {
      width: 800px;
    }
  }
  @media screen and (max-width: 500px) {
    p {
      font-size: 0.8rem;
      line-height: 1.5rem;
      max-width: 800px;
      margin: 0rem 3.1rem;
    }
    .about-img {
      width: 290px;
    }
    .about__info {
      max-width: 100%;
      margin: 1rem auto;

      .about-profile {
        height: 120px;
        left: 38%;
      }
    }
    .about-mindmap {
      width: 300px;
    }
  }
`;

export {AboutWrapper};
