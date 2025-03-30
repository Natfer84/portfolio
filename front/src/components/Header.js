import React from "react";
import AboutPerson from "./AboutPerson.js";
import Nav from "./Nav.js";

export default function Header() {
  return (
    <div className="Box__About">
    
      <AboutPerson />
      <Nav />
      
    </div>
  );
}
