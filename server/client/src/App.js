import React from "react";
import NotFound from "./components/NotFound/NotFound";
import Landing from "./Landing";
import { HashRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

const App = () => {
  return (
    <Router>
      <div className="App" style={{ minHeight: "100vh" }}>
        <Route exact path="/page-not-found" component={NotFound} />
        <Route path="/:name?" component={Landing} />
      </div>
    </Router>
  );
};

export default App;
