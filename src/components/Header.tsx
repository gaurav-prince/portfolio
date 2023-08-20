import headerLightImgUrl from "../assets/g-text.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import headerDarkImgUrl from "../assets/logo_light.png";
// import { faCode } from "@fortawesome/free-solid-svg-icons";
// import { slide as Menu, Props } from "react-burger-menu";
import { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";

let Header = (props: any) => {
  // const [darkMode, setDarkMode] = useState(true);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  const handleDarkModeChange = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {/* <FontAwesomeIcon icon={faCode} className="header-brand" />
            <h3 id="brand-name" className="header-brand">
              Gaurav Prince
            </h3> */}

            <img
              src={headerLightImgUrl}
              alt="Gaurav Prince"
              id="headerImage"
              width="50"
              height="50"
            />
          </a>
          {/* <Menu>
            <a className="menu-link" href="#about">
              About
            </a>
            <a className="menu-link" href="#skills">
              Skills
            </a>
            <a className="menu-link" href="#projects">
              Projects
            </a>
            <a className="menu-link" href="#experience">
              Experience
            </a>
            <a className="menu-link" href="#contact">
              Contact Me
            </a>
          </Menu> */}
          {/* <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  Offcanvas
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li></li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            
          </div> */}
          {/* <button classNameName="btn">
              <FontAwesomeIcon icon={faBars} />
            </button> */}
          <div className="header-menu" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 ">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#about"
                  onClick={() => {
                    setAboutVisible(!aboutVisible);
                  }}
                >
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

              <li className="checkbox-switch" onClick={handleDarkModeChange}>
                <DarkModeToggle
                  onChange={props.toggleTheme}
                  checked={isDarkMode}
                  size={40}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
