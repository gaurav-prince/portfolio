import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

let Skills = () => {
  return (
    <div className="skills">
      <h2>My Skills</h2>
      <div id="skill-text">
        I thrive on embracing diverse technologies, constantly learning and
        implementing what I really like.
      </div>
      <FontAwesomeIcon icon={faCoffee} />
      <FontAwesomeIcon icon="apple" />
    </div>
  );
};

export default Skills;
