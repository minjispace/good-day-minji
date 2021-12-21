import React from 'react';
import {ProjectsWrapper} from '../styles/projects';
import {projectList} from '../utils/constant';
import {PROJECTS_IMG} from '../utils/images';

function Projects({id}) {
  return (
    <ProjectsWrapper id={id}>
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
          } = item;
          return (
            <ul key={id}>
              <li>
                <div className="projects-box">
                  <h3>{title}</h3>
                  <p>{content}</p>
                  <div className="project-btns">
                    <a href={viewLink} target="_blank" rel="noreferrer">
                      <button>{viewBtn}</button>
                    </a>
                    <a href={githubLink} target="_blank" rel="noreferrer">
                      <button>{githubBtn}</button>
                    </a>
                  </div>
                </div>
                <img src={img} alt={title} />
              </li>
            </ul>
          );
        })}
      </div>
    </ProjectsWrapper>
  );
}

export default Projects;
