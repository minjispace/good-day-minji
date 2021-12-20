import styled from 'styled-components';

const AboutWrapper = styled.div`
  min-height: 100vh;
  text-align: center;
  display: grid;
  place-content: center;
  align-items: center;
  h1 {
    font-size: 3.5rem;
  }
  .hero__info {
    max-width: 70%;
    margin: 5rem auto;
    display: grid;
    grid-template-columns: auto auto;

    p {
      margin-right: 3rem;
      font-size: 1.5rem;
      font-weight: 300;
      min-width: 500px;
      max-width: 800px;
      letter-spacing: 0.2rem;
    }
  }
  @media screen and (max-width: 991px) {
    h1 {
      font-size: 2.5rem;
    }
    img {
      width: 300px;
      height: 250px;
    }
    .hero__info {
      max-width: 100%;
      grid-template-columns: auto;
      margin: 0 5rem;
      p {
        margin: 2rem;
      }
    }
  }
`;

export {AboutWrapper};
