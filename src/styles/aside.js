import styled from 'styled-components';

const AsideWrapper = styled.aside`
  img {
    width: 30px;
    height: 30px;
    margin: 0 0.5rem;
    transition: all 0.3s ease-in-out;
  }
  ul {
    position: fixed;
    top: 30%;
    left: 3%;
    z-index: 1000;
  }

  li {
    margin: 1rem 0;
    padding: 0.3rem;
    font-size: 1.3rem;
    text-align: center;
    transition: all 0.3s linear;
    font-family: 'Indie Flower', cursive;
    cursor: pointer;
    &:hover {
      transform: scale(0.98) rotate(2deg);
    }

    svg {
      font-size: 1.8rem;
    }
  }
  .icon {
    margin: 1rem 0;
    padding: 0.3rem;
    font-size: 1.7rem;
    text-align: center;
    transition: all 0.3s linear;
    font-family: 'Indie Flower', cursive;
    &:hover {
      transform: scale(1.08);
    }
  }
  .aside-tree {
    display: none;
  }
  @media screen and (max-width: 991px) {
    .aside-tree {
      display: block;
      position: absolute;
      bottom: -3%;
      z-index: -100;
    }
    ul {
      top: 93%;
      display: grid;
      grid-template-columns: auto auto auto auto auto;
      left: 0;
      width: 100%;
      /* height: 5rem;  */
      font-size: 2rem;

      color: white;
    }
    li {
      font-size: 1.2rem;
      text-align: center;
      color: white;
    }
    .aside-icon {
      display: none;
    }
  }
`;

export {AsideWrapper};
