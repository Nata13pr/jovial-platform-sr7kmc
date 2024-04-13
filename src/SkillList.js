import Skill from './Skill.js';
import "./styles.css";

export default function SkillList(props){
    return(
        <div className='skill-list'>
           <Skill  skill='Javascript' image='😅' color={{backgroundColor: 'red'}}/>
           <Skill  skill='Typescript' image='😇' color={{backgroundColor: 'blue'}}/>
           <Skill  skill='React' image='😘' color={{backgroundColor: 'purple'}}/>
           <Skill  skill='Node.js' image='😝' color={{backgroundColor: 'orange'}}/>
           <Skill  skill='Html' image='🤨' color={{backgroundColor: 'yellow'}}/>
        </div>
    )
}