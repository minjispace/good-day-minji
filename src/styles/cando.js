import styled from 'styled-components';

const CanDoWrpper = styled.section`
  min-height: 100vh;
  text-align: center;
  max-width: 50%;
  margin: 25rem auto;

  .cando-img {
    width: 750px;
  }
  .cando__list {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    grid-column-gap: 5rem;
    margin-top: 4rem;
  }

  p {
    margin-top: 1rem;
    font-weight: bold;
  }
  .cando-icon {
    height: 60px;
    border-radius: 10px;
    border: 2px solid black;
    cursor: pointer;
    transition: all 0.3s linear;
    &:hover {
      transform: scale(0.98);
    }
  }
  @media screen and (max-width: 991px) {
    max-width: 100%;
    .cando-img {
      width: 500px;
    }
    .cando__list {
      grid-template-columns: auto;
    }
  }
  ul {
    margin: 1rem 0;
  }
  p {
    font-size: 1.3rem;
  }
  @media screen and (max-width: 500px) {
    margin: 9rem auto;
    .cando-img {
      width: 290px;
    }
    .cando-icon {
      height: 40px;
    }
    .cando__list {
      grid-column-gap: 1rem;
      margin-top: 0.5rem;
      p {
        margin-top: 0rem;
        font-size: 1.1rem;
      }
    }
  }
`;

export {CanDoWrpper};
