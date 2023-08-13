import { useState, useEffect } from "react";

let Projects = () => {
  let dataForm = [
    {
      name: "",
      desc: "",
      language: "",
      size: "",
    },
  ];
  const [data, setData] = useState(dataForm);

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const gitData = await (
        await fetch("https://api.github.com/users/GauravPrince-hub/repos")
      ).json();
      const data = gitData
        .map((obj: any) => [
          {
            name: obj.name,
            desc: obj.desc,
            language: obj.language,
            size: obj.size,
          },
        ])
        .flat();
      // set state when the data received
      setData(data);
      // console.log(data);
    };
    dataFetch();
  }, []);

  return (
    <div className="projects container">
      <h1 className="display-5 fw-bold">Open Source Projects!</h1>
      <div className="row">
        <div className="card col-md-3 offset-md-1 col-sm-5 project-card">
          <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" className="card-link">
              Another link
            </a>
          </div>
        </div>
        <div className="card col-md-3 project-card">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" className="card-link">
              Another link
            </a>
          </div>
        </div>
        <div className="card col-md-3 project-card">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" className="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
