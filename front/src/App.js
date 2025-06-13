import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ParticlesBackground from "./components/ParticlesBackground.js"; 
import Header from "./components/Header.js";
import Natalia from "./pages/Natalia.js";
import AboutMe from "./pages/AboutMe.js";
import Portfolio from "./pages/Portfolio.js";
//import Nav from "./components/Nav.js";

import "./styles/App.css"; 

function App() {
  return (
    <div className="App">
      
      <Router>
      <ParticlesBackground />
      <Header />
       <Routes>
       <Route path="/" element={<Natalia />}></Route>
       <Route path="/AboutMe" element={<AboutMe />}></Route>
       <Route path="/Portfolio" element={<Portfolio />}></Route>
       </Routes>
      
      
    
  </Router>
    </div>
  );
}

export default App;
