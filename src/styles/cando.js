import styled from 'styled-components';

const CanDoWrpper = styled.section`
  min-height: 100vh;
  text-align: center;
  max-width: 50%;
  margin: 12rem auto;

  img {
    width: 750px;
  }
  .cando__list {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    grid-column-gap: 4rem;
    margin-top: 4rem;
  }

  p {
    font-size: 1rem;
    margin-top: 2rem;
    max-width: 250px;
    margin: 0 auto;
    letter-spacing: 0.1rem;
  }
  h3 {
    margin-top: 2rem;
    font-weight: bold;
  }
  .cando-icon {
    font-size: 3rem;
  }
  @media screen and (max-width: 991px) {
    max-width: 100%;
    img {
      width: 500px;
    }
    .cando__list {
      grid-template-columns: auto;
    }
  }
  ul {
    margin: 2rem 0;
  }
  h3 {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 500px) {
    margin: 9rem auto;
    img {
      width: 290px;
    }
    .cando__list {
      grid-column-gap: 1rem;
      margin-top: 0.5rem;
      h3 {
        margin-top: 0rem;
        font-size: 1.1rem;
      }
      p {
        font-size: 0.8rem;
      }
    }
  }
`;

export {CanDoWrpper};
