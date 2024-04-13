import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Avatar from './Avatar.js';
import Intro from "./Intro.js";
import SkillList from './SkillList.js'
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar className='avatar' image='https://img2.akspic.ru/previews/1/3/7/5/7/175731/175731-devuska-nos-shheka-guba-krasochnost-x750.jpg' name='avatar'/>
        <Intro name='Natalia' text='Here you can find activities to practise your reading skills. Reading will help you to improve your understanding of the language and build your vocabulary.' />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
         <SkillList/>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
