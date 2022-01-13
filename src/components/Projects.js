import React from 'react';
import useNav from '../hooks/useNav';
import {ProjectsWrapper} from '../styles/projects';
import {projectList} from '../utils/constant';
import {
  FIREBASE,
  PROJECTS_IMG,
  REACT_IMG,
  SERVER_LESS,
  STYLED_COMPONENTS,
} from '../utils/images';

function Projects() {
  const projectsRef = useNav('projects');

  return (
    <ProjectsWrapper id="projectsContainer" ref={projectsRef}>
      <img className="project-img" src={PROJECTS_IMG} alt="projects=img" />
      <div className="projects-list">
        {projectList.map((item) => {
          const {
            id,
            title,
            content,
            viewBtn,
            githubBtn,
            viewLink,
            githubLink,
            img,
            idea,
          } = item;
          return (
            <ul key={id}>
              <div className="projects-box">
                <h3>{title}</h3>
                <div className="project-type">
                  <img
                    className="project-language"
                    src={REACT_IMG}
                    alt="react"
                  />
                  {title === '나의 다마고찌 키우기 🐹' && (
                    <img
                      className="project-language"
                      src={FIREBASE}
                      alt="firebase "
                    />
                  )}
                  {title === '당당 마켓 🥕' && (
                    <img
                      className="project-language"
                      src={FIREBASE}
                      alt="firebase "
                    />
                  )}
                  {title === '꿈 마켓 🌙' && (
                    <img
                      className="project-language"
                      src={SERVER_LESS}
                      alt="server-less "
                    />
                  )}

                  <img
                    className="project-language"
                    src={STYLED_COMPONENTS}
                    alt="styled-components"
                  />
                </div>
                <p>✨ {content}</p>
                <p className="idea">💡 {idea}</p>
                <div className="project-btns">
                  <a href={viewLink} target="_blank" rel="noreferrer">
                    <button>🎥 {viewBtn}</button>
                  </a>
                  <a href={githubLink} target="_blank" rel="noreferrer">
                    <button>📂 {githubBtn}</button>
                  </a>
                </div>
              </div>
              <a href={viewLink} rel="noreferrer" target="_blank">
                <img className="project-img" src={img} alt={title} />
              </a>
            </ul>
          );
        })}
      </div>
    </ProjectsWrapper>
  );
}

export default Projects;
