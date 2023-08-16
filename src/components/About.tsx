import personIllustration from "../assets/person-namaste.svg";
let About = () => {
  return (
    <div className="container py-4" id="about">
      <div className="row home-div">
        <div className="col-md-8 h-100 p-5">
          <h1 className="display-5 fw-bold hello-text">Hi All, I'm Gaurav</h1>
          <p className="fs-4">
            <span id="desc-text">
              Passionate full stack developer with a knack for crafting
              seamless, user-centric web solutions. Proficient in front-end and
              back-end technologies, with a commitment to delivering exceptional
              user experiences and driving digital growth.
            </span>
          </p>
          <button
            className="btn btn-light rounded-circle social"
            type="button"
            id="btn-github"
            onClick={() => {
              window.open("https://github.com/gaurav-prince", "_blank");
            }}
          >
            <i className="bi bi-github"></i>
          </button>
          <button
            className="btn btn-light rounded-circle social"
            type="button"
            id="btn-linkedin-social"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/gaurav-kumar-prince",
                "_blank"
              );
            }}
          >
            <i className="bi bi-linkedin"></i>
          </button>
          <button
            className="btn btn-light rounded-circle social"
            type="button"
            id="btn-google"
            onClick={() => {
              window.open("mailto:gaurav.prince.official@gmail.com", "_blank");
            }}
          >
            <i className="bi bi-google"></i>
          </button>
          <button
            className="btn btn-light rounded-circle social"
            type="button"
            id="btn-twitter"
            onClick={() => {
              window.open("https://twitter.com/gaurav_prince_", "_blank");
            }}
          >
            <i className="bi bi-twitter"></i>
          </button>
        </div>
        <div className="col-md-4 image-about">
          <img src={personIllustration} alt="programmer" id="person-hello" />
        </div>
      </div>
    </div>
  );
};

export default About;
