import React from "react";
import { Route, Router, Routes} from "react-router-dom";
import Signup from "../components/Signup";
import Loggin from "../components/Loggin";



const RoutesS = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Signup />} />
      <Route path="/login" element={<Loggin  />} />
    </Routes>
  );
};

export default RoutesS;
