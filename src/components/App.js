import React, { useState } from "react";
import SkillsContext from "./Context.js";
import Addskill from "./Addskill";
import Skill from "./Skill";

const App = () => {
  const [skills, setSkills] = useState(['HTML', 'CSS', 'JavaScript', 'React']);

  return (
    <>
      <SkillsContext.Provider value={{ skills, setSkills }}>
        <h1 id="heading">Add skill</h1>
        <Addskill />
        <Skill />
       
        
     {/* {console.log(skills)} */}
      </SkillsContext.Provider>
    </>
  );
};

export default App;
