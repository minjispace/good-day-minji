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
          const {id, title, content, btn, img, href} = item;
          return (
            <ul key={id}>
              <li>
                <div className="projects-box">
                  <h3>{title}</h3>
                  <p>{content}</p>
                  <div className="project-btns">
                    {btn.map((item, index) => {
                      return (
                        <a
                          href={href}
                          key={index}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <button key={index}>{item}</button>
                        </a>
                      );
                    })}
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
