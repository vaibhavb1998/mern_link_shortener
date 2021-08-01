import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav-area">
        <header>
          <a className="logo" href="/">
            instaURL
          </a>
          <div className="menu-toggle"></div>
          <nav>
            <ul>
              <li>
                <a href="#app">Home</a>
              </li>
              <li>
                <a href="#link-shorten-area">Create</a>
              </li>
            </ul>
          </nav>
          <div className="clearfix"></div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
