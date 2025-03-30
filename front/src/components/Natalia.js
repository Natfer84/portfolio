import React from "react";
import "../styles/Natalia.css";

export default function Natalia() {
  const email = "natalia.fgar84@gmail.com";

  


 

  return (
    <div className="Box__Natalia">
      <h1 className="Box_Natalia_h1">Natalia Fernández</h1>

      <h2 className="Box_Natalia_h2">
        BIENVENIDX A MI PORTFOLIO COMO FULL STACK DEVELOPER
      </h2>

      <p className="Box_Natalia_P">
        Si quieres ponerte en contacto conmigo escribeme a{" "}
        <span>
          <a href={`mailto: ${email}`}> {email}</a>
        </span>
      </p>

      <div className="Box_Natalia_CV">
        <a href="assets/cvNatalia.pdf" download="cvNatalia.pdf">
          <div className="Box_div_cv">Descargar mi CV</div>
        </a>
      </div>

      {/* caja redes sociales */}
      <div className="Box_AboutMe_networks">
        {/* enlace github */}
        <div className="Box_div_github">
          <a href="https://www.linkedin.com/in/natalia-fernandezgarcia/">
            <div className="Box_div_linkedin_img">
              <img src="images/linkedin.jpg" alt="logotipo linkedin"></img>
            </div>
          </a>
        </div>
        {/* enlace linkedin */}
        <div className="Box_div_linkedin">
          <a href="https://www.linkedin.com/in/natalia-fernandezgarcia/">
            <div className="Box_div_linkedin_img">
              <img src="images/linkedin.jpg" alt="logotipo linkedin"></img>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
