import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3Alt,
  faSquareJs,
  faNode,
  faReact,
  faNpm,
  faDocker,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
// import azureIcon from "../assets/azure.svg";
// import kubernetesIcon from "../assets/kubernetes.svg";
import skillsIllustration from "../assets/person-skills.svg";

let Skills = () => {
  return (
    <div className="skills container" id="skills">
      <div className="row skill-row">
        <div className="col-md-5">
          <img src={skillsIllustration} alt="programmer" id="skill-img" />
        </div>
        <div className="col-md-7 skill-icons">
          <h1 id="skill-header">My Skills</h1>
          <div id="skill-text">
            I thrive on embracing diverse technologies, constantly learning and
            implementing what I really like.
          </div>
          <ul className="dev-icons">
            <li className="skill-inline">
              <FontAwesomeIcon icon={faHtml5} />
              <p>HTML5</p>
            </li>
            <li className="skill-inline">
              <FontAwesomeIcon icon={faCss3Alt} />
              <p>CSS3</p>
            </li>
            <li className="skill-inline">
              <FontAwesomeIcon icon={faSquareJs} />
              <p>JavaScript</p>
            </li>
            <li className="skill-inline">
              <FontAwesomeIcon icon={faNode} />
              <p>NodeJS</p>
            </li>
            <li className="skill-inline">
              <FontAwesomeIcon icon={faReact} />
              <p>React</p>
            </li>
            <li className="skill-inline">
              <FontAwesomeIcon icon={faDatabase} />
              <p>SQL Databases</p>
            </li>
            <li className="skill-inline">
              <FontAwesomeIcon icon={faNpm} />
              <p>NPM</p>
            </li>
            <li className="skill-inline">
              <FontAwesomeIcon icon={faGitAlt} />
              <p>Git</p>
            </li>
            <li className="skill-inline">
              <FontAwesomeIcon icon={faDocker} />
              <p>Docker</p>
            </li>
            <span id="more-skill">and many others!</span>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
