import React from "react";
import "./Footer.css";

import githubIcon from "../images/Footer/github.png";
import instagramIcon from "../images/Footer/instagram.png";
import leetCodeIcon from "../images/Footer/leetcode.png";
import youtubeIcon from "../images/Footer/youtube.png"; // Assuming this is your YouTube icon
import codeforcesIcon from "../images/Footer/codeforces.png"; // Assuming this is your Codeforces icon

function Footer() {
  return (
    <footer className="footer">
      <div className="social-media-links">
        <a
          href="https://github.com/shuoheren"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://www.instagram.com/shuohe2024/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a
          href="https://www.leetcode.com/shuohe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={leetCodeIcon} alt="LeetCode" />
        </a>
        <a
          href="https://www.youtube.com/@BraveUmbrella"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={youtubeIcon} alt="YouTube" />
        </a>
        <a
          href="https://codeforces.com/profile/brave_umbrella"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={codeforcesIcon} alt="Codeforces" />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Shuohe Ren. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
