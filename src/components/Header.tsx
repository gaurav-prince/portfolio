import "../App.css";
import headerLightImgUrl from "../assets/logo_3.png";
// import headerDarkImgUrl from "../assets/logo_light.png";

let Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={headerLightImgUrl}
              alt="Gaurav Prince"
              id="headerImage"
              //   width="30"
              //   height="24"
            />
          </a>
          <div className="header-menu" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 ">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact Me
                </a>
              </li>
              <li className="checkbox-switch">
                <div className="form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="darkswitch"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
