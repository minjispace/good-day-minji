import styled from 'styled-components';

const ProjectsWrapper = styled.div`
  min-height: 100vh;
  text-align: center;
  max-width: 50%;
  margin: 8rem auto;

  .project-img {
    width: 800px;
  }
  .projects-list {
    .projects-box {
      min-width: 400px;
    }
    ul {
      margin: 5rem 0;
    }
    li {
      display: grid;
      grid-template-columns: auto auto;
      align-items: center;
      justify-content: center;
      grid-column-gap: 6rem;

      p {
        max-width: 200px;
        margin: 2rem auto;
        opacity: 0.6;
        letter-spacing: 0.2rem;
        line-height: 2rem;
      }
      h3 {
        font-weight: bold;
      }
    }
    img {
      width: 300px;
      border-radius: 10px;
    }

    button {
      margin: 0 1.5rem;
      background: var(--main-green);
      border-radius: 30px;
      outline: none;
      border: none;
      color: white;
      padding: 0.8rem 1.5rem;
      font-size: 1.2rem;
      transition: all 0.3s linear;
      cursor: pointer;
      &:hover {
        background: var(--main-brown);
        transform: scale(0.98);
      }
    }
  }
  @media screen and (max-width: 991px) {
    max-width: 100%;
    .project-img {
      width: 500px;
    }
    .projects-list {
      ul {
        margin: 5rem 0;
      }
      li {
        grid-column-gap: 2rem;
      }
      img {
        width: 200px;
      }
      button {
        padding: 0.5rem 0.8rem;
        font-size: 0.9rem;
        margin: 0 0.7rem;
      }
    }
  }
`;

export {ProjectsWrapper};
