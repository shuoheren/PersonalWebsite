import React, { useContext } from "react";
import { AppContext } from "../App"; // Adjust the import path to the location of your App component
import "./Navigation.css";

function Navigation() {
  const { setCurrentPage } = useContext(AppContext);

  return (
    <div className="navigation">
      <a onClick={() => setCurrentPage("AboutMe")} href="#about-me">
        About Me
      </a>
      <a
        onClick={() => setCurrentPage("SkillsTechnologies")}
        href="#skills-technologies"
      >
        Skills & Technologies
      </a>
      <a onClick={() => setCurrentPage("LeetCode")} href="#leetcode">
        My LeetCode Profile
      </a>
      <a onClick={() => setCurrentPage("Learning")} href="#learning">
        Learning Resources
      </a>
      <a onClick={() => setCurrentPage("BookList")} href="#booklist">
        Book List
      </a>
    </div>
  );
}

export default Navigation;
