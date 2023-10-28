import React from "react";
import leetCodeImage from "./lc.png";

function LeetCode() {
  // Static information about your LeetCode achievements
  const leetCodeInfo = {
    username: "shuohe",
    highestRating: "2080",
    contestAttended: "47",
    profileUrl: "https://leetcode.com/shuohe",
    questionsSolved: "1372",
    UpdatedDate: "2023-10-25",
  };

  return (
    <div>
      <h3>LeetCode Achievements</h3>
      <p> Updated date: {leetCodeInfo.UpdatedDate} </p>
      <p>Username: {leetCodeInfo.username}</p>
      <p>Highest Rating: {leetCodeInfo.highestRating}</p>
      <p>Contest Attended: {leetCodeInfo.contestAttended}</p>
      <p>Questions Solved: {leetCodeInfo.questionsSolved}</p>
      <a
        href={leetCodeInfo.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit my LeetCode Profile
      </a>

      <img src={leetCodeImage} alt="LeetCode" width={1000} px />
    </div>
  );
}

export default LeetCode;
