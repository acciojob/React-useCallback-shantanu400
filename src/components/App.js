import React, { useState } from "react";
import SkillsContext from "./Context.js";
import Addskill from "./Addskill";
import Skill from "./Skill";

const App = () => {
  const [skills, setSkills] = useState(["HTML","CSS", "Skill2", "Skill3", "Skill4","skill5"]);

  return (
    <>
      <SkillsContext.Provider value={{ skills, setSkills }}>
        <h1 id="heading">Add skill</h1>
        <Skill />
        <Addskill />
        
     {/* {console.log(skills)} */}
      </SkillsContext.Provider>
    </>
  );
};

export default App;
