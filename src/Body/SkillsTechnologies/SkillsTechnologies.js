import React from "react";
import "./SkillsTechnologies.css";

function SkillsTechnologies() {
  return (
    <div className="skills-technologies">
      <h2>Skills & Expertise</h2>

      <div className="tech-section">
        <h3>Programming Languages</h3>
        <p>Java, C#, SQL, Python, C++, GO</p>
      </div>

      <div className="tech-section">
        <h3>Frameworks & Technologies</h3>
        <p>
          Spring Boot, Spring MVC, .NET Core, ASP.NET MVC, Hibernate, Entity
          Framework, Redis, React, Angular
        </p>
      </div>

      <div className="tech-section">
        <h3>Databases</h3>
        <p>MySQL, PostgreSQL, MongoDB, MS SQL Server</p>
      </div>

      <div className="tech-section">
        <h3>Tools & Platforms</h3>
        <p>Visual Studio, IntelliJ IDEA, Git, Maven, AWS, Azure</p>
      </div>

      <div className="tech-section">
        <h3>Professional Approach</h3>
        <p>
          My focus lies in creating clean, efficient, and maintainable code. I
          thrive on solving complex challenges with simple and scalable
          solutions. Keeping up with the latest technology trends and industry
          best practices is my passion.
        </p>
      </div>
    </div>
  );
}

export default SkillsTechnologies;
