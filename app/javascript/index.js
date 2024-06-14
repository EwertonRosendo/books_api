import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";


export default (
  <Router>
    <Routes>
      <Route path="/home" element={<Home />} />
      
    </Routes>
  </Router>
);