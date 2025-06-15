import React from "react";
import "../styles/AboutPerson.css";
import { Link } from "react-router-dom";

export default function AboutPerson() {


  return (
     <Link to="/Natalia">
    <div className="Container_AboutPerson">
        <div className="Box_Personal">
          <div className="Box_rotating_border"></div>
        </div>
    </div> 
    </Link>
  );
}
