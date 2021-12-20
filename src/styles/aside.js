import styled from 'styled-components';

const AsideWrapper = styled.aside`
  ul {
    position: fixed;
    top: 40%;
    left: 3%;
    font-size: 2rem;
  }

  li {
    color: black;
    margin: 1rem 3rem;
    font-size: 1.3rem;
    border-bottom: 2px solid transparent;
    transition: all 0.3s linear;
    font-family: 'Indie Flower', cursive;
    &:hover {
      cursor: pointer;
      border-bottom: 2px solid white;
    }
  }
`;

export {AsideWrapper};
