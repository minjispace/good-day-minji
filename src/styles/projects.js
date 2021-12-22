import styled from 'styled-components';

const ProjectsWrapper = styled.section`
  min-height: 100vh;
  text-align: center;
  max-width: 50%;
  margin: 12rem auto;

  .project-type {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.5rem;
  }
  .project-language {
    border: 2px solid black;
    border-radius: 10px;
    margin: 0.2rem;
  }
  .idea {
    opacity: 0.6;
  }
  .project-img {
    width: 700px;
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
        max-width: 23rem;
        min-width: 10rem;
        margin: 2rem auto;
        letter-spacing: 0.2rem;
        line-height: 2rem;
      }
      h3 {
        font-weight: bold;
      }
    }
    .project-img {
      width: 300px;
      border-radius: 10px;
      transition: all 400ms ease-in;
      cursor: pointer;
      &:hover {
        transform: scale(0.8);
      }
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
        grid-template-columns: auto;
        grid-column-gap: 2rem;
        p {
          max-width: 25rem;
        }
      }
      .project-img {
        width: 200px;
        margin: 2rem auto;
      }
      button {
        padding: 0.5rem 0.8rem;
        font-size: 0.7rem;
        margin: 0 0.7rem;
      }
    }
  }
  @media screen and (max-width: 500px) {
    margin: 8rem auto;
    .project-language {
      margin: 0.3rem;
    }
    .project-img {
      width: 290px;
    }
    .projects-list {
      .projects-box {
        min-width: 300px;
      }
      ul {
        margin: 2rem 0;
      }
      li {
        p {
          /* max-width: 23rem;
          min-width: 10rem; */
          margin: 2rem;
        }
      }
      .project-img {
        width: 200px;
      }
    }
  }
`;

export {ProjectsWrapper};
