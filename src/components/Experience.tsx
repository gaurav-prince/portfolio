let Experience = () => {
  return (
    <div className="container experience">
      <h2>Experiences</h2>
      {/* <div className="row"> */}
      <div className="card col-md-5 experience-card">
        <div className="">
          <i className="bi bi-github"></i>
        </div>
        <div className="">Random text for now!</div>
      </div>
      {/* <div className="card col-md-6"></div> */}
      <div className="experience-card">
        <div
          className="experience-banner"
          // style="background: rgb(164, 36, 12);"
        >
          <div className="experience-blurred_div"></div>
          <div className="experience-div-company">
            <h5 className="experience-text-company">Quora</h5>
          </div>
          <img
            className="experience-roundedimg"
            src="/static/media/quoraLogo.85eb29f4d52320c8ed99.png"
            alt="Quora"
          />
        </div>
        <div className="experience-text-details">
          <h5 className="experience-text-role">Front-End Developer</h5>

          <h5 className="experience-text-date">May 2017 – May 2018</h5>
          <p className="subTitle experience-text-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul></ul>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Experience;
