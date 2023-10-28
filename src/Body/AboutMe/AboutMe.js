import React from "react";
import "./AboutMe.css";

import ShuoheImage from "../../images/body/AboutMe/shuohe.png";
import BostonImage from "../../images/body/AboutMe/boston.png";
import PythonMemes1 from "../../images/body/AboutMe/python_memes1.png";
import JayChou from "../../images/body/AboutMe/jay_chou.png";

function AboutMe() {
  return (
    <div className="about-me-section">
      {/* Hero Image */}
      <img src={BostonImage} alt="Boston" className="large-image" />

      <h1>I'm Shuohe Ren 任朔禾</h1>

      <p>
        I am a seasoned software engineer with a decade of experience, driven by
        a passion for technology and a commitment to excellence. My journey in
        tech has been filled with pioneering projects, collaborative teamwork,
        and a relentless pursuit of knowledge.
      </p>

      <p>
        My adventure started in China's vibrant tech hubs, where I honed my
        problem-solving and innovative skills. I then broadened my horizon at
        Boston University, studying Computer Science, and immersing myself in
        diverse cultures and technological methodologies.
      </p>

      <p>
        Currently, I explore the intersections of technology, from coding sleek
        web applications in Python and JavaScript to diving deep into AI and
        cloud technologies.
      </p>

      {/* Python Section */}
      <div className="python-section">
        <img src={PythonMemes1} alt="Python Memes 1" className="python-image" />
        <p>
          In the realm of programming, I have a particular fondness for Python.
          Its simplicity and readability, coupled with its powerful libraries
          and community support, make it an ideal language for both beginners
          and seasoned developers. Its versatility in fields ranging from web
          development to machine learning never ceases to amaze and inspire me.
        </p>
      </div>

      {/* Jay Chou Section */}
      <div className="jay-section">
        <p>
          Beyond my professional interests, I have a deep appreciation for
          music, particularly the works of Jay Chou. His unique blend of pop,
          rock, and R&B, infused with traditional Chinese music elements,
          resonates with my own creative endeavors.
        </p>
        <img src={JayChou} alt="Jay Chou" className="jay-image" />
      </div>

      {/* After Work Section */}
      <div className="after-work-section">
        <p>
          My technical toolbox includes Python, JavaScript, Go, and an avid
          interest in AI and machine learning. I continuously experiment with
          these technologies to stay at the cutting edge of innovation,
          leveraging cloud solutions like AWS and Azure for scalability and
          efficiency.
        </p>

        <p>
          Beyond my technical endeavors, I am passionate about environmental
          sustainability, often engaging in projects at the nexus of technology
          and environmental conservation. Personal growth for me is about
          balancing technical expertise with nurturing a creative and curious
          mind.
        </p>

        <p>
          Looking ahead, I am excited about the potential of virtual reality and
          augmented reality to reshape our interactions and learning
          experiences. My aspiration is to lead transformative projects that
          integrate these emerging technologies for a smarter, interconnected
          world.
        </p>
      </div>

      {/* Profile Picture */}
      <img src={ShuoheImage} alt="Shuohe Ren" className="profile-picture-me" />

      {/* Closing Remarks */}
      <p>
        If you’re intrigued by my journey, interested in discussing tech, or
        considering collaboration, feel free to connect. I'm always open to
        exploring new ideas and opportunities.
      </p>
    </div>
  );
}

export default AboutMe;
