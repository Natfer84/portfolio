import React from "react";
import "../styles/Natalia.css";
import Loop from "../components/Loop.js";

export default function Natalia() {
  const email = "natalia.fgar84@gmail.com";

  return (
    <main className="Container_Main_Natalia">
      <div className="Box__Natalia">
        <h1 className="Box_Natalia_h1">Natalia Fernández</h1>

        <h2 className="Box_Natalia_h2">
          Bienvenidx a mi portfolio como full stack developer
        </h2>

        <p className="Box_Natalia_P">
          Si quieres ponerte en contacto conmigo escríbeme a{" "}
          <span>
            <a href={`mailto: ${email}`}> {email}</a>
          </span>
        </p>

        <div className="Box_Natalia_CV">
          <a href="assets/cvNatalia.pdf" download="cvNatalia.pdf">
            <div className="Box_div_cv">Descargar PDF mi CV</div>
          </a>
        </div>

        {/* caja redes sociales */}
        <section>
          <div className="Box_AboutMe_networks">
            {/* enlace github */}
            <div className="Box_div_github">
              <div className="Box_div_github_img">
                <a href="https://github.com/Natfer84/proyectoPortfolio">
                  <img src="images/github.jpg" alt="logotipo github"></img>
                </a>
              </div>
            </div>
            {/* enlace linkedin */}
            <div className="Box_div_linkedin">
              <div className="Box_div_linkedin_img">
                <a href="https://www.linkedin.com/in/natalia-fernandezgarcia/">
                  <img src="images/linkedin.jpg" alt="logotipo linkedin"></img>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Loop />
    </main>
  );
}
