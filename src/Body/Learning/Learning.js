import React from "react";
import "./Learning.css";
import LearningJava from "./LearningJava/LearningJava";
import LearningAWS from "./LearningAWS/LearningAWS.js";
import LearningSpring from "./LearningSpring/LearningSpring";
function Learning() {
  return (
    <div className="learning-resources">
      <h1>Learning Resources Hub</h1>
      <p>
        Welcome to the learning resources hub. Choose a topic to dive into our
        curated resources and start your learning journey!
      </p>

      <LearningJava />
      <LearningSpring />
      <LearningAWS />
    </div>
  );
}

export default Learning;
