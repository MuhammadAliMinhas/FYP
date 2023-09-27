// imports
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/RoutesS";

// main component
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes />
      </div>
    </Router>
  );
};

// app exported
export default App;
