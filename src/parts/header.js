import React from "react";
import Fade from "react-reveal/Fade";

import BrandIcon from "../parts/IconText";

import Button from "../elements/Button";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  if (props.isCentered) {
    return (
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Button className="brand-text-icon mx-auto" href="" type="link">
              Hi
              <span className="text-gray-900">
                Beach
                <span style={{ color: "orange", fontSize: "35px" }}>.</span>
              </span>
            </Button>{" "}
          </nav>
        </div>
      </header>
    );
  }
  return (
    <Fade>
      <header className="spacing-sm">
        <div className="container">
          <nav
            className="navbar navbar-expand-lg navbar-light"
            style={{ padding: 0 }}
          >
            <BrandIcon />
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item${getNavLinkClass("")}`}>
                  <Button className="nav-link" type="link" href="">
                    {" "}
                    Home
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
                  <Button className="nav-link" type="link" href="/browse-by">
                    {" "}
                    Browse By
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/stories")}`}>
                  <Button className="nav-link" type="link" href="/stories">
                    {" "}
                    Stories
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/agents")}`}>
                  <Button className="nav-link" type="link" href="/agents">
                    {" "}
                    Agents
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
}
