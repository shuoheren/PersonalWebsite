import React from "react";
import "./LeetCode.css";
import leetCodeImage from "../../images/body/LeetCode/lc.png";

function LeetCode() {
  const leetCodeInfo = {
    username: "shuohe",
    highestRating: "2080",
    contestAttended: "47",
    profileUrl: "https://leetcode.com/shuohe",
    questionsSolved: "1372",
    updatedDate: "2023-10-25",
  };

  const myStory = [
    {
      title: "How I Started My Coding Journey",
      content:
        "My journey began in high school when I first discovered the magic of writing code. It was fascinating to see how lines of text could transform into actions and solutions. The more problems I solved, the deeper my passion grew.",
    },
    {
      title: "My Love for Algorithms",
      content:
        "Algorithms, for me, are more than just steps to solve problems. They are like intricate puzzles waiting to be solved. The joy of finding the optimal solution and seeing an algorithm work efficiently is unparalleled.",
    },
    {
      title: "A Memorable Problem-Solving Experience",
      content:
        "One of my most memorable experiences was participating in a coding hackathon. Working under pressure, collaborating with teammates, and finally cracking a tough algorithmic challenge — the experience was exhilarating and solidified my love for coding.",
    },
    {
      title: "Why I Keep Pushing My Limits",
      content:
        "Coding and problem-solving are not just skills; they're part of who I am. Every new problem is an opportunity to learn and grow. That's why I continue challenging myself on platforms like LeetCode.",
    },
  ];

  return (
    <div className="leetcode-container">
      <h3>LeetCode Achievements</h3>
      <p>Updated date: {leetCodeInfo.updatedDate}</p>
      <p>Username: {leetCodeInfo.username}</p>
      <p>Highest Rating: {leetCodeInfo.highestRating}</p>
      <p>Contest Attended: {leetCodeInfo.contestAttended}</p>
      <p>Questions Solved: {leetCodeInfo.questionsSolved}</p>

      <div className="my-story">
        {myStory.map((story, index) => (
          <div key={index} className="story-section">
            <h4>{story.title}</h4>
            <p>{story.content}</p>
          </div>
        ))}
      </div>

      <a
        href={leetCodeInfo.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit my LeetCode Profile
      </a>

      <img src={leetCodeImage} alt="LeetCode" className="leetcode-image" />
    </div>
  );
}

export default LeetCode;
