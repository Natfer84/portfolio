import React from "react";
import AboutPerson from "./AboutPerson.js";
import Nav from "./Nav.js";
import "../styles/Header.css";

export default function Header() {
  return (
    <div className="Box__Header">
    
      <AboutPerson />
      <Nav />
      
    </div>
  );
}
