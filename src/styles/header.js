import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background: white;
  color: white;
  letter-spacing: 0.2rem;
  font-family: 'Indie Flower', cursive;
  font-weight: bold;
  width: 100vw;

  .header-empty {
    background: var(--main-green);
    width: 100vw;
  }

  .header-menu {
    position: relative;
    display: grid;
    grid-template-columns: auto auto;
    top: 50px;
    margin: 0 9rem;

    ul {
      display: flex;
    }
    li {
      color: white;
      margin-right: 3rem;
      font-size: 1.3rem;
      border-bottom: 2px solid transparent;
      transition: all 0.3s linear;
      &:hover {
        cursor: pointer;
        border-bottom: 2px solid white;
      }
    }
  }

  h2 {
    margin: 0;
    font-weight: bold;
  }
  svg {
    display: block;
    position: absolute;
  }

  @media screen and (max-width: 991px) {
    .header-empty {
      height: 7rem;
    }
    .header-menu {
      top: -60px;
      margin: 0 5rem;
      ul {
        display: none;
      }
    }
  }
`;

export {HeaderWrapper};
