
import React from 'react';
import Project from './Projects';
import projects from '../projects.json';

function ProjectGallery() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        {projects.slice(0, 6).map((project, index) => (
          <div key={project.id} className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <Project project={project} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectGallery;