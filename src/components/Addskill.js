import React, { useCallback } from "react";
import { useContext } from "react";
import SkillsContext from "./Context.js";

const Addskill = () => {
  const { skills, setSkills } = useContext(SkillsContext);
  const updatedskill = useCallback(
    (nskill) => {
      return !skills.includes(nskill) ? [...skills, nskill] : skills;
    },
    [skills]
  );

  const handleAdd = (e) => {
    e.preventDefault();
    const nskill = e.target.elements["skill-input"].value;
    setSkills(updatedskill(nskill));
    e.target.elements["skill-input"].value = "";
  };
  return (
    <div>
      <form onSubmit={handleAdd}>
        <input type="text" id="skill-input"></input>
        <button type="submit"> Add Skill</button>
      </form>
    </div>
  );
};

export default Addskill;
