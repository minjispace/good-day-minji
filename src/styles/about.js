import styled from 'styled-components';

const AboutWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  place-content: center;
  align-items: center;
  margin: 9rem auto;
  .about-img {
    width: 750px;
    margin: 2rem auto;
  }
  h1 {
    font-size: 3.5rem;
    font-family: 'Titillium Web', sans-serif;
    margin: 2rem auto;
  }
  .about__info {
    max-width: 80%;
    margin: 5rem auto;
    display: grid;
    grid-template-columns: auto auto;

    p {
      margin-right: 3rem;
      font-size: 1.5rem;
      font-weight: 300;
      min-width: 40rem;
      max-width: 23rem;
      letter-spacing: 0.2rem;
    }
    img {
      height: 400px;
    }
  }
  @media screen and (max-width: 991px) {
    margin: 10rem auto;
    h1 {
      font-size: 2.5rem;
    }
    .about-img {
      width: 500px;
    }
    .about-profile {
      height: 300px;
    }
    .about__info {
      max-width: 100%;
      grid-template-columns: auto;
      margin: 0 5rem;
      p {
        margin: 2rem;
        font-size: 1.3rem;
        min-width: 20rem;
      }
    }
  }
  @media screen and (max-width: 500px) {
    .about-img {
      width: 290px;
    }
    .about__info {
      max-width: 100%;
      margin: 1rem auto;

      p {
        margin: 0;
        margin-left: 1rem;
        font-size: 1rem;
        min-width: 15rem;
        max-width: 15rem;
        letter-spacing: 0.2rem;
      }
      img {
        height: 200px;
      }
    }
    .about-profile {
      height: 250px;
    }
  }
`;

export {AboutWrapper};
