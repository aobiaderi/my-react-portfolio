

import React from 'react';
import camping3 from '../images/camping3.gif';
import codingQuiz from '../images/Coding Quiz.gif';
import workDayScheduler from '../images/work-day-scheduler.gif';
import passwordGenerator from '../images/password_generator.png';
import myTeamWebpage from '../images/my-team-webpage.png';
import weatherDashboard from '../images/Weather Dashboard.gif';

const images = {
  project1: camping3,
  project2: codingQuiz,
  project3: workDayScheduler,
  project4: passwordGenerator,
  project5: myTeamWebpage,
  project6:weatherDashboard
};

function Project({ project, index }) {
  const projectIndex = `project${index + 1}`; // generate a string like 'project1' for the image object lookup
  const image = images[projectIndex]; // look up the image object using the generated string

  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        <div className="cardContainer">
          <div className="card h-100">
            <img src={image} className="card-img-top" alt={`${project.name} screenshot`} />
            <div className="card-body">
              <h5 className="card-title">{project.name}</h5>
              <a href={project.site} className="btn btn-primary depl">Deployed version</a>
              {' '}
              <a href={project.github} className="btn btn-secondary repos">GitHub repository</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
