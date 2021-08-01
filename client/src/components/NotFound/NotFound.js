import React from "react";
import "./notFound.css";

const NotFound = () => {
  return (
    <>
      <section className="container error-page">
        <div>
          <h1>
            <span style={{ color: "red" }}>404</span> Error
          </h1>
          <h2 className="text-white">link was not found.</h2>
        </div>
        <h3 style={{ marginTop: 100, fontSize: 40 }}>
          <a href="/">
            <span>Click here</span>
          </a>{" "}
          to create a new one.
        </h3>
      </section>
    </>
  );
};

export default NotFound;
