import styled from 'styled-components';

const CanDoWrpper = styled.div`
  min-height: 100vh;
  text-align: center;
  max-width: 50%;
  margin: 3rem auto;
  img {
    width: 800px;
  }
  .cando__list {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    grid-column-gap: 7rem;
    margin-top: 7rem;
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
`;

export {CanDoWrpper};
