import headerLightImgUrl from "../assets/gp-text.png";
import headerDarkImgUrl from "../assets/gp-text-w.png";
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
  const [show, setShow] = useState("");

  const handleDarkModeChange = () => {
    setIsDarkMode(!isDarkMode);
    setShow("");
  };

  const handleNavbarShow = () => {
    setShow("show");
  };

  const handleNavbarHide = () => {
    setShow("");
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
              src={isDarkMode ? headerDarkImgUrl : headerLightImgUrl}
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
          <div className="nav-mobile">
            <button
              className={`navbar-toggler ${isDarkMode ? "btn-dark" : ""}`}
              type="button"
              onClick={handleNavbarShow}
            >
              <i className="bi bi-list"></i>
            </button>
            <div
              className={`offcanvas ${show} ${
                isDarkMode ? "canvas-dark" : ""
              } offcanvas-end`}
              id="offcanvasNavbar"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">
                  Menu
                </h5>
                <button
                  type="button"
                  onClick={handleNavbarHide}
                  className={`btn-close ${isDarkMode ? "btn-dark" : ""}`}
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item" onClick={handleNavbarHide}>
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#about"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item" onClick={handleNavbarHide}>
                    <a className="nav-link" href="#skills">
                      Skills
                    </a>
                  </li>
                  <li className="nav-item" onClick={handleNavbarHide}>
                    <a className="nav-link" href="#projects">
                      Projects
                    </a>
                  </li>
                  <li className="nav-item" onClick={handleNavbarHide}>
                    <a className="nav-link" href="#experience">
                      Experience
                    </a>
                  </li>
                  <li className="nav-item" onClick={handleNavbarHide}>
                    <a className="nav-link" href="#contact">
                      Contact
                    </a>
                  </li>
                  <li
                    className="checkbox-switch"
                    onClick={handleDarkModeChange}
                  >
                    <DarkModeToggle
                      onChange={props.toggleTheme}
                      checked={isDarkMode}
                      size={40}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
