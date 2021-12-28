import styled from 'styled-components';

const HeroWrapper = styled.section`
  margin-top: 25rem;
  display: flex;
  justify-content: space-around;
  height: 60vh;
  padding: 0 3rem;
  img {
    width: 250px;
  }
  h1 {
    font-size: 1.7rem;
    letter-spacing: 0.4rem;
    line-height: 3.4rem;
    font-family: 'Cairo', sans-serif;
  }
  @media screen and (max-width: 991px) {
    margin-top: 15rem;
    justify-content: center;
    flex-direction: column;
    img {
      width: 150px;
    }
    h1 {
      margin-top: 3rem;
      font-size: 1rem;
      letter-spacing: 0.3rem;
      line-height: 2rem;
    }
  }
  @media screen and (max-width: 500px) {
    margin-top: 10rem;
  }
`;

export {HeroWrapper};
