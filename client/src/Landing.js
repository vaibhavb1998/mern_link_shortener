import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";

const Landing = () => {
  return (
    <>
      <div className="container-fluid">
        <Navbar />
        <main className="container" id="app">
          <Header />
          <Form />
        </main>
      </div>
    </>
  );
};

export default Landing;
