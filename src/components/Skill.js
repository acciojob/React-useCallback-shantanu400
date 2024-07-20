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
              <li key={index} id={`skill-number-${index+1}`}>
                {skill}
                <button id="skill-add-btn" onClick={() => handleDelete(skill)}>
                  Delete
                </button>
              </li>
            ))
          : ""}
      </ul>
    </>
  );
};

export default memo(Skill);
