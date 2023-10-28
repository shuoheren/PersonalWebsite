import React, { createContext, useState } from "react";
import "./App.css";
import Navigation from "./Navigation/Navigation";
import AboutMe from "./Body/AboutMe/AboutMe";
import SkillsTechnologies from "./Body/SkillsTechnologies/SkillsTechnologies";
import LeetCode from "./Body/LeetCode/LeetCode";
import BookList from "./Body/BookList/BookList";
import Learning from "./Body/Learning/Learning";
import Footer from "./Footer/Footer";
// Create Context
export const AppContext = createContext();

function App() {
  const [show, setShow] = useState(false);
  const [currentPage, setCurrentPage] = useState("AboutMe");

  // Providing context values
  return (
    <AppContext.Provider value={{ show, setShow, currentPage, setCurrentPage }}>
      <div className="App">
        <Navigation />
        {currentPage === "AboutMe" && <AboutMe />}
        {currentPage === "SkillsTechnologies" && <SkillsTechnologies />}
        {currentPage === "LeetCode" && <LeetCode />}
        {currentPage === "BookList" && <BookList />}
        {currentPage === "Learning" && <Learning />}
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
