import React from "react";
import AboutPerson from "./AboutPerson.js";
import Nav from "./Nav.js";
import "../styles/Header.css";

export default function Header() {
  return (
    <main className="Container_main_header">
      <div className="Box__Header">
        <section>
          <AboutPerson />
        </section>
        <section>
          <Nav />
        </section>
      </div>
    </main>
  );
}
