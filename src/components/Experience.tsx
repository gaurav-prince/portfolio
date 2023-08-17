import companyImg1 from "../assets/tcs_logo.svg";
import companyImg2 from "../assets/ge_logo.svg";
let Experience = () => {
  return (
    <div className="container experience" id="experience">
      <h1 id="experience-text">Experiences</h1>
      <div className="row">
        <div className="col-md-5 card card-experience" id="ge-card">
          <img src={companyImg2} className="card-img-top" alt="..." />
          <div className="card-body experience-card-body">
            <h5 className="card-title experience-card-title">
              General Electric Co.
            </h5>
            <h6 className="experience-card-subtitle mb-2">
              Software Engineer (Jul-2022 - Present )
            </h6>
            <p className="experience-card-text">
              Maintain and upgrade the in house product called Thread Connect,
              developed on top of Apache NiFi. Along with it provide solutioning
              and support to the customers.
            </p>
          </div>
          <div className="row skill-used">
            <ul>
              <li className="skill-name badge rounded-pill">Java</li>
              <li className="skill-name badge rounded-pill">Apache NiFi</li>
              <li className="skill-name badge rounded-pill">Jenkins</li>
              <li className="skill-name badge rounded-pill">Argo CD</li>
              <li className="skill-name badge rounded-pill">SonarQube</li>
              <li className="skill-name badge rounded-pill">Kubernetes</li>
            </ul>
          </div>
        </div>
        <div
          className="col-md-5 offset-md-1 card card-experience"
          id="tcs-card"
        >
          <img src={companyImg1} className="card-img-top" alt="..." />
          <div className="card-body experience-card-body">
            <h5 className="card-title experience-card-title">
              Tata Consultancy Services
            </h5>
            <h6 className="experience-card-subtitle mb-2">
              IT Analyst (Jul 2017- Jul 2022)
            </h6>
            <p className="experience-card-text">
              Developed the Reporting Module in NodeJS for a cloud-based
              solution hosted in Azure for a Utility-based client who provide
              energy services to more than 2 million people in the country.
            </p>
          </div>
          <div className="row skill-used">
            <ul>
              <li className="skill-name badge rounded-pill">NodeJS</li>
              <li className="skill-name badge rounded-pill">Express</li>
              <li className="skill-name badge rounded-pill">TypeScript</li>
              <li className="skill-name badge rounded-pill">Microsoft Azure</li>
              <li className="skill-name badge rounded-pill">Azure Cosmos DB</li>
              <li className="skill-name badge rounded-pill">
                Azure Kubernetes Services
              </li>
              <li className="skill-name badge rounded-pill">RabbitMQ</li>
              <li className="skill-name badge rounded-pill">CheckMarx</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
