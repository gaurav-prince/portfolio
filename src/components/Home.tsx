import workIllustration from "../assets/engineer-1.svg";
let Home = () => {
  return (
    <>
      <div className="container py-4" id="home">
        <div className="row p-5 mb-4 rounded-3">
          <div className="col-md-8 h-100 p-5">
            <h1 className="display-5 fw-bold hello-text">Hello There!</h1>
            <p className="fs-4">
              <span id="name-text">This is Gaurav Prince. </span>
              <span id="job-title-text">I'm a Software Engineer.</span>
            </p>
            <button
              className="btn btn-outline-light rounded-pill"
              type="button"
              id="btn-cv"
            >
              Check My CV
            </button>
            <button
              className="btn btn-outline-light rounded-pill"
              type="button"
              id="btn-linkedin"
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
