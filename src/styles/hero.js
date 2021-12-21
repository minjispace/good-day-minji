import styled from 'styled-components';

const HeroWrapper = styled.section`
  margin-top: 22rem;
  display: flex;
  justify-content: flex-end;
  height: 60vh;
  padding: 0 3rem;
  h1 {
    font-size: 3rem;
    letter-spacing: 0.8rem;
    line-height: 4rem;
    font-family: 'Cairo', sans-serif;
  }
  @media screen and (max-width: 991px) {
    margin-top: 15rem;
    justify-content: center;
    h1 {
      font-size: 1.7rem;
    }
  }
`;

export {HeroWrapper};
