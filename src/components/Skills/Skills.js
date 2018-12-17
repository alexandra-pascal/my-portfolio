import React from "react";
import VerticalLine from "./../VerticalLine/VerticalLine";
import FirstSectionSkills from "./FirstSectionSkills";
import SecondSectionSkills from "./SecondSectionSkills";
import './Skills.css'

export default function Skills() {
  return (
    <div className="skills-wrap">
      <FirstSectionSkills />
      <VerticalLine />
      <SecondSectionSkills />
    </div>
  )
}
