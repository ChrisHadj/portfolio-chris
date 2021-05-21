import React from "react";
import Glass from '../Components/Glass'
import Tittle from "../Components/Tittle";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";
import BackAbout from "../img/about-back.jpg"


function AboutPage() {
  return (
    <div className="AboutPage">
        
      <Tittle title={"About Me"} span={"About Me"} />
      <ImageSection />
      <Tittle title={"My Skills"} span={"My Skills"} />
      <div className="skillsContainer">
        <SkillsSection skill={"HTML/CSS"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"JavaScript"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"React Js"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"Node Js"} progress={"80%"} width={"80%"} />
        </div>
        
    </div>
  );
}

export default AboutPage;
