import React from 'react';

function Project({ project }) {
  
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        <div className="cardContainer">
          <div className="card h-100">
            <img src={`${process.env.PUBLIC_URL}/${project.image}`} className="card-img-top" alt={`${project.name} screenshot`} />
            <div className="card-body">
              <h5 className="card-title">{project.name}</h5>
              <a href={project.site} className="btn btn-primary depl">Deployed version</a>
              {'  '}
              <a href={project.github} className="btn btn-secondary repos">GitHub repository</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;