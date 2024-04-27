import companyImg1 from "../assets/tcs_logo.svg";
import companyImg2 from "../assets/ge_logo.svg";
import companyImg3 from "../assets/ge_aero.png";
let Experience = () => {
  return (
    <div className="container experience" id="experience">
      <h1 id="experience-text">Experiences</h1>
      <div className="row">
        <div className="card card-experience">
          <img
            src={companyImg3}
            className="card-img-top"
            id="ge-aero"
            alt="..."
          />
          <div className="card-body experience-card-body">
            <h5 className="card-title experience-card-title">GE Aerospace</h5>
            <h6 className="experience-card-subtitle mb-2">
              Senior Software Engineer
            </h6>
            <p className="experience-card-subtitle-2">(Oct-2023 - Present )</p>
            <p className="experience-card-text">
              Led the design and implementation of integrations in Thread
              Connect, optimizing access management for 200+ team members, while
              maintaining a React and NodeJS portal to streamline deployment.
            </p>
          </div>
          <div className="row skill-used">
            <ul>
              <li className="skill-name badge rounded-pill">Java</li>
              <li className="skill-name badge rounded-pill">Apache NiFi</li>
              <li className="skill-name badge rounded-pill">AWS</li>
              <li className="skill-name badge rounded-pill">Kubernetes</li>
              <li className="skill-name badge rounded-pill">ReactJS</li>
              <li className="skill-name badge rounded-pill">NodeJS</li>
            </ul>
          </div>
        </div>
        <div className="card card-experience">
          <img src={companyImg2} className="card-img-top" alt="..." />
          <div className="card-body experience-card-body">
            <h5 className="card-title experience-card-title">
              General Electric Co.
            </h5>
            <h6 className="experience-card-subtitle mb-2">Software Engineer</h6>
            <p className="experience-card-subtitle-2">(Jul-2022 - Oct-2023 )</p>
            <p className="experience-card-text">
              Led the successful upgrade and management of Thread Connect
              product, ensuring compliance with security standards, developed
              new features and fixes, improving product security and
              performance.
            </p>
          </div>
          <div className="row skill-used">
            <ul>
              <li className="skill-name badge rounded-pill">Java</li>
              <li className="skill-name badge rounded-pill">Apache NiFi</li>
              <li className="skill-name badge rounded-pill">AWS</li>
              <li className="skill-name badge rounded-pill">Jenkins</li>
              <li className="skill-name badge rounded-pill">Argo CD</li>
              <li className="skill-name badge rounded-pill">SonarQube</li>
              <li className="skill-name badge rounded-pill">Kubernetes</li>
            </ul>
          </div>
        </div>
        <div className="card card-experience">
          <img src={companyImg1} className="card-img-top" alt="..." />
          <div className="card-body experience-card-body">
            <h5 className="card-title experience-card-title">
              Tata Consultancy Services
            </h5>
            <h6 className="experience-card-subtitle mb-2">IT Analyst</h6>
            <p className="experience-card-subtitle-2"> (Jul 2017- Jul 2022)</p>
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
              <li className="skill-name badge rounded-pill">AKS</li>
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
