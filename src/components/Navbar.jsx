import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar_cont">
      <div className="cover">Cover</div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/features">Features</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
