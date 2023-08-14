import companyImg1 from "../assets/tcs_logo.svg";
import companyImg2 from "../assets/ge_logo.svg";
let Experience = () => {
  return (
    <div className="container experience" id="experience">
      <h2>Experiences</h2>
      <div className="row">
        <div className="col-md-6 experience-card-own">
          <div className="row">
            <div className="col-md-3 company-name">
              <h4>Tata Consultancy Services</h4>
            </div>
            {/* <div className="col-md-1"> */}
            <img
              src={companyImg1}
              alt="company1"
              id="tcsimg"
              className="col-md-1 company-icon"
            />
            {/* </div> */}
            {/* <i className="col-md-1 bi bi-github company-icon"></i> */}
            <div className="col-md-6">
              <p>
                Worked as a NodeJS Developer to build a cloud-based solution
                hosted in Azure for a Utility-based client. The solution was to
                upgrade an on-premise application to move to the cloud and add
                multiple other features. The project was the world's
                first-of-its-kind application. My key responsibilities in this
                role were: • Develop new API endpoints in NodeJS • Deploy the
                codebase in different environments using Azure DevOps • Host the
                Application in AKS(Azure Kubernetes Service) within a Docker
                Container. • Provide support in production after Go-live •
                Mentor a team of 3 providing them with tasks
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-5 experience-card-own">
          <div className="row">
            <div className="col-md-3 company-name border-right">
              <h4>Large Name</h4>
            </div>
            <img
              src={companyImg2}
              alt="company2"
              id="geimg"
              className="col-md-1 company-icon"
            />
            {/* <i className="col-md-1 bi bi-github company-icon"></i> */}
            <div className="col-md-6">
              <p>
                Currently, working as part of the Thread Connect Team which
                provides Integrations solutions for other internal businesses.
                The product is built on top of Apache NiFi. My key
                responsibilities in the role are: • Develop new features within
                the Application • Help with the Application upgrade process by
                doing CVE Fixes • Deployment through Jenkins • Train new joiners
                and provide them KT • Document the processes
              </p>
            </div>
          </div>
        </div>
        {/* <div className="col-md-6">
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
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul></ul>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Experience;
