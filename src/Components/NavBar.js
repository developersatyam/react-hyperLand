import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div>
      <Link to="/">
        <p>HyperLand</p>
      </Link>
      {props.links.map((link,index) => {
        return <Link key={index} to={link.link}> {link.name} </Link>;
      })}
    </div>
  );
};

export default NavBar;
