import workIllustration from "../assets/engineer-1.svg";
import { TypeAnimation } from "react-type-animation";
import CV from "../assets/Resume.pdf";

let Home = () => {
  return (
    <>
      <div className="container py-4" id="home">
        <div className="row home-div">
          <div className="col-md-8 col-sm-6 col-xs-6 col-home-text">
            <h1 className="display-5 fw-bold hello-text">Hello There!</h1>
            <p className="fs-4">
              <span id="name-text">This is Gaurav Prince. </span>
              <br id="space-for-small-device" />
              <TypeAnimation
                sequence={[
                  "I'm a Senior Software Engineer.",
                  1000,
                  "I'm a Web Developer.",
                  1000,
                  "I'm a Proud Indian.",
                  1000,
                ]}
                speed={50}
                style={{ fontSize: "1em" }}
                repeat={Infinity}
                id="job-title-text"
              />
              {/* <span id="job-title-text">I'm a Software Engineer.</span> */}
            </p>
            <a href={CV} download="Resume-Gaurav" target="_blank">
              <button
                className="btn btn-outline-light rounded-pill"
                type="button"
                id="btn-cv"
              >
                Check My CV
              </button>
            </a>
            <button
              className="btn btn-outline-light rounded-pill"
              type="button"
              id="btn-linkedin"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/gaurav-kumar-prince",
                  "_blank"
                );
              }}
            >
              <i className="bi bi-linkedin"></i>
              <span className="linkedin-text">LinkedIn</span>
            </button>
          </div>
          <div className="col-md-4 image">
            <img src={workIllustration} alt="programmer" id="programmer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
