import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
  navBar,
  mainBody,
  repos,
  skills,
  experiences
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";

import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
// import { Blog } from "./components/blog/Blog";
// import BlogPost from "./components/blog/BlogPost";
import QuoteCard from "./components/home/QuoteCard.jsx";


import Experience from "./components/home/Experience";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />

      {
        experiences.show && (
          <Experience experiences={experiences}/>
        )
      }
      {repos.show && (
        <Project
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
        />
      )}
   
      {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        />
      )}
      
    </>
  );
});
function App() {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
    {navBar.show && <Navbar ref={titleRef} />}
    <Route path="/" exact component={() => <Home ref={titleRef} />} />
    {/* {false && <Route path="/blog" exact component={Blog} />}
    {false && <Route path="/blog/:id" component={BlogPost} />} */}
    <Footer>
    <QuoteCard/>
    </Footer>
  </BrowserRouter>




  );
}

export default App;
