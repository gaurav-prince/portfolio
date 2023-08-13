import { useState, useEffect } from "react";

let Projects = () => {
  let dataForm = [
    {
      name: "",
      desc: "",
      language: "",
      size: "0",
      starCount: "0",
    },
  ];
  const [data, setData] = useState(dataForm);

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const gitData = await (
        await fetch("https://api.github.com/users/gaurav-prince/repos")
      ).json();
      const data = gitData
        .map((obj: any) => [
          {
            name: obj.name,
            desc: obj.description,
            language: obj.language,
            size: obj.size,
            starCount: obj.stargazers_count,
          },
        ])
        .flat();
      // set state when the data received
      setData(data);
      console.log(data);
    };
    dataFetch();
  }, []);

  const projectCards = data.map((repo) => {
    if (parseInt(repo.starCount) > 0) {
      return (
        <div className="card col-md-3 project-card" key={repo.name}>
          <div className="card-body">
            <h5 className="card-title">{repo.name}</h5>
            {/* <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> */}
            <p className="card-text">{repo.desc}</p>
            <div className="card-link">{repo.language}</div>
            <div className="card-link">{parseInt(repo.size) / 1000}</div>
          </div>
        </div>
      );
    }
  });

  return (
    <div className="projects container">
      <h1 className="display-5 fw-bold">Open Source Projects!</h1>
      <div className="row">{projectCards}</div>
    </div>
  );
};

export default Projects;
