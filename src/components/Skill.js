import React, { useContext } from "react";
import { memo } from "react";
import SkillsContext from "./Context.js";

const Skill = () => {
  const { skills, setSkills } = useContext(SkillsContext);
  const handleDelete = (skill) => {
    {
      setSkills(
        skills.filter((e) => {
          return e !== skill;
        })
      );
    }
  };

  return (
    <>
      <ul>
        {skills
          ? skills.map((skill, index) => (
            <div key={index} style={{display:"flex"}}>
            <li  id={`skill-number-${index}`} onClick={() => handleDelete(skill)}>
                {skill}
                
              </li>
              
            </div>
              
            ))
          : ""}
      </ul>
    </>
  );
};

export default memo(Skill);
