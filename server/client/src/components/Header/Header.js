import React from "react";
import "./header.css";
import banner from "./banner.svg";

const Header = () => {
  return (
    <>
      <section className="banner-area">
        <div className="row">
          <div className="col-sm-7">
            <h1 className="banner-heading">
              Powerful,
              <div>
                Recognizable
                <span className="banner-heading-highlight"> Links </span>
              </div>
            </h1>
            <h2 className="banner-sub-heading">
              Take your links to a new level and start sharing branded links.
            </h2>

            <a href="#link-shorten-area">
              <div className="mt-5 get-started-btn">Get Started</div>
            </a>
          </div>

          <div className="col-sm-5">
            <img
              className="banner-img"
              src={banner}
              alt="banner"
              height="450"
              width="500"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
