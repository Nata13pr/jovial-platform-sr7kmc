import Skill from "./Skill.js";
import skills from "./data.js";
import "./styles.css";

export default function SkillList(props) {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill} key={skill.skill} />
      ))}
    </div>
  );
}
