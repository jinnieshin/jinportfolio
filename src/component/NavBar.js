import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { IconContext } from "react-icons";
import { NavBarData } from "./NavBarData";

function NavBar() {
  const [navBar, setNavBar] = useState(false);
  const showNavBar = () => setNavBar(!navBar);

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Link to="#" className={"menu-bars"}>
        <FaIcons.FaBars onClick={showNavBar} />
      </Link>
      <div className="navBar">
        <nav className={navBar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showNavBar}>
            <li className="navbar-toggle"></li>
            {NavBarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </IconContext.Provider>
  );
}

export default NavBar;
