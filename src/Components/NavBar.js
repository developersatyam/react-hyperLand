import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div>
      <div className="nav">
        <Link to="/list">
          <p className="nav-head">HyperLand</p>
        </Link>
        <div className="nav-link-cont">
          {props.links.map((link, index) => {
            return (
              <Link className="nav-link" key={index} to={link.link}>
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default NavBar;
