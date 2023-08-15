import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
let Contact = () => {
  return (
    <div className="container" id="contact">
      <h1 className="contact-header-text">A cup of tea/coffee?</h1>
      <div className="social-icons">
        <a
          href="mailto:gaurav.prince.official@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-contact"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          href="https://www.linkedin.com/in/gaurav-kumar-prince"
          target="_blank"
          rel="noopener noreferrer"
          className="social-contact"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/gaurav-prince"
          target="_blank"
          rel="noopener noreferrer"
          className="social-contact"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://twitter.com/gaurav_prince_"
          target="_blank"
          rel="noopener noreferrer"
          className="social-contact"
        >
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
      </div>
      <h5 className="footer">Developed with ❤️ by Gaurav Prince</h5>
    </div>
  );
};

export default Contact;
