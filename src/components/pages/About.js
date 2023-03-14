import React from "react";
import Obee1 from '../../assets/Obee1.jpg';
function About() {
  return (
    // <div id="about" className = "about1">
    //   <h2>About Me</h2>
    <div className="abt-section" id="abt-section1">
      <div> 
        <p className="about-1" id="abt-1">About Me</p>
      </div>
      
      <div className="abt-section" id="abt-section1">
      <div className="about-me">
        <div className="row">
          <div className="col-sm-12 col-md-9 col-lg-9">
            <p className="about-2" id="abt-2">
              As a certified front end web developer, I prioritize user-centered design, open communication and collaboration with stakeholders.

              I am passionate about creating seamless user experiences that delight customers and elevate brands. I am well positioned to provide unique perspectives on how end users interact with websites and software platforms by leveraging my background in production of digital solutions and software quality assurance.

              Outside of work, I enjoy spending quality time with family and participating in church activities. I led and shaped the formation of the choir in my local parish where I am currently the choir mistress. My hobbies include swimming, reading and singing. My interests extend to my love of software engineering and I find myself spending time in self-learning to code in other programming languages. My passion for engineer also extends to my interest in all things related to automation.

            </p>

            <a href="https://drive.google.com/file/d/1NcAWrN-V-_4ygf-tA3u5dtyU8-CDDUYC/view?usp=sharing" target="_blank" download>
            <button className="btn1"><i class="fa fa-download"></i> Download my Resume</button>
            </a>

          </div>
          
          <div className="col-sm-12 col-md-3 col-lg-3"> 
            <img className="my-image" src={Obee1} alt="a photo of Obiaderi Agbonrofo"/>
          </div>             
        </div>
      </div>    
    </div>
  </div>

  );
}

export default About;