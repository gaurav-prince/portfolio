let About = () => {
  return (
    <>
      <div className="container py-4">
        <div className="p-5 mb-4 rounded-3">
          <div className="h-100 p-5">
            <h1 className="display-5 fw-bold hello-text">Hi All, I'm Gaurav</h1>
            <p className="col-md-8 fs-4">
              <span id="desc-text">
                I'm a Full Stack Software Developer having a Software
                Development experience of 6+ years with JavaScript / NodeJS /
                Angular / React and some other libraries and frameworks.
              </span>
            </p>
            <button
              className="btn rounded-circle"
              type="button"
              id="btn-github"
            >
              <i className="bi bi-github"></i>
            </button>
            <button
              className="btn rounded-circle"
              type="button"
              id="btn-linkedin-social"
            >
              <i className="bi bi-linkedin"></i>
            </button>
            <button
              className="btn rounded-circle"
              type="button"
              id="btn-google"
            >
              <i className="bi bi-google"></i>
            </button>
            <button
              className="btn rounded-circle"
              type="button"
              id="btn-twitter"
            >
              <i className="bi bi-twitter"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
