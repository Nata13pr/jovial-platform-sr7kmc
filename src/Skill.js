import "./styles.css";

export default function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: `${props.skill.color}` }}>
      <span>{props.skill.skill}</span>
      <span>
        {props.skill.level === "advanced" && "😅"}
        {props.skill.level === "intermediate" && "😝"}
        {props.skill.level === "beginner" && "😇"}
      </span>
    </div>
  );
}
