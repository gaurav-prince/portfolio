import "../App.css";
// import headerLightImgUrl from "../assets/logo_3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import headerDarkImgUrl from "../assets/logo_light.png";
import { faBars, faCode } from "@fortawesome/free-solid-svg-icons";
import { slide as Menu, Props } from "react-burger-menu";
import { useEffect, useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";

let Header = (props: any) => {
  const [darkMode, setDarkMode] = useState(true);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <FontAwesomeIcon icon={faCode} className="header-brand" />
            <h3 id="brand-name" className="header-brand">
              Gaurav Prince
            </h3>
            {/* <img
              src={headerLightImgUrl}
              alt="Gaurav Prince"
              id="headerImage"
              //   width="30"
              //   height="24"
            /> */}
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
          {/* <div className="hamburger-menu">
            <button className="btn">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div> */}
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

              <li className="checkbox-switch">
                <DarkModeToggle
                  onChange={setIsDarkMode}
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
