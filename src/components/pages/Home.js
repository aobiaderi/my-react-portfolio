import React from "react";
import About from "./About";
import Contact from "./Contact";
import ProjectGallery from "./ProjectGallery";


function Home() {
  return (
    <div className=" col-sm-12 col-md-12 col-lg-12 text  text-center">
      <div className="welcome-section jumbotron ">
        <h1 className="display-4" id="disp-4">Welcome to My Portfolio!</h1>
        <br></br>
        <p className="lead">My name is Obiaderi Agbonrofo and I am a talented front end web developer.</p>
        <br></br>
        <a href="https://github.com/aobiaderi" className="btn btn-primary btn-lg" role="button" data-toggle="modal" data-target="#exampleModal">Hire Me</a>

      </div>

      <div className="about-section" id="abt-section1">
        <About />
      </div> 

      <h2 className="display-4" id="disp-4">Project Gallery</h2>

      <div className="gallery-section" id="my-projectsgallery">
          <ProjectGallery />
      </div> 
        
      <div className="contact-section" id="contact">
          <Contact />
      </div>

    </div>
  );
}

export default Home;


