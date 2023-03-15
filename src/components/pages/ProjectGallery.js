
// import React from 'react';
// import Project from './Projects';
// import projects from '../projects.json';

// function ProjectGallery() {
//   return (
//     <div className="container-fluid">
//       <div className="row justify-content-center">
//         {projects.slice(0, 6).map((project, index) => (
//           <div key={project.id} className="col-sm-12 col-md-6 col-lg-4 mb-4">
//             <Project project={project} index={index} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProjectGallery;

import React from 'react';
import Project from './Projects';
import projects from '../projects.json';

function ProjectGallery() {
const project1 = projects[0];
const project2 = projects[1];
const project3 = projects[2];
const project4 = projects[3];
const project5 = projects[4];
const project6 = projects[5];

return (
<div className="container-fluid">
<div className="row justify-content-center">
<div className="col-sm-12 col-md-6 col-lg-4 mb-4">
<Project project={project1} index={0} />
</div>
<div className="col-sm-12 col-md-6 col-lg-4 mb-4">
<Project project={project2} index={1} />
</div>
<div className="col-sm-12 col-md-6 col-lg-4 mb-4">
<Project project={project3} index={2} />
</div>
<div className="col-sm-12 col-md-6 col-lg-4 mb-4">
<Project project={project4} index={3} />
</div>
<div className="col-sm-12 col-md-6 col-lg-4 mb-4">
<Project project={project5} index={4} />
</div>
<div className="col-sm-12 col-md-6 col-lg-4 mb-4">
<Project project={project6} index={5} />
</div>
</div>
</div>
);
}

export default ProjectGallery;