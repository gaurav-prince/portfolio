import { useState, useEffect } from "react";

let Projects = () => {
  const [data, setData] = useState();

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await (
        await fetch(
          "https://run.mocky.io/v3/b3bcb9d2-d8e9-43c5-bfb7-0062c85be6f9"
        )
      ).json();

      // set state when the data received
      setData(data);
    };

    dataFetch();
  }, []);

  return (
    <div className="projects container">
      <h1 className="display-5 fw-bold">Open Source Projects!</h1>
      <div className="row">
        <div className="card col-md-3 offset-md-1 col-sm-5 project-card">
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
