import "./styles.css";

export default function Skill (props){
    return (
        <div className="skill" style={props.color}>{props.skill}{props.image}</div>
    )
}