import { useState } from "react";
import "../styles/Curriculum.css";

export default function Curriculum() {
  const [mostrarCursos1, setMostrarCursos1] = useState(false);

  const habilidades = [
    {
      nombre: "JavaScript",
      img: "/images/iconoJsBlanco.png",
    },
    {
      nombre: "HTML5",
      img: "/images/iconoHtlm5.png",
    },
    {
      nombre: "CSS3",
      img: "/images/iconoCss.png",
    },
    {
    nombre: "Figma",
    img: "/images/iconofigma.png"
    },
     {
    nombre: "Wordpress",
    img: "/images/iconsWordpress.png"
    },
  ];
    const habilidades2 = [
    {
      nombre: "JavaScript",
      img: "/images/iconoJsBlanco.png",
    },
    {
      nombre: "HTML5",
      img: "/images/iconoHtlm5.png",
    },
    {
      nombre: "CSS3",
      img: "/images/iconoCss.png",
    },
    {
    nombre: "React",
    img: "/images/iconsReact.png"
    },
     {
    nombre: "Git",
    img: "/images/iconsGit.png"
    },
    {
    nombre: "Github",
    img: "/images/iconsGithub.png"
    },
    {
    nombre: "Firebase",
    img: "/images/iconsFirebase.png"
    },
     {
    nombre: "Mongo DB",
    img: "/images/iconsMongoDb.png"
    },
     {
    nombre: "MySQL",
    img: "/images/iconsMysqlGood.png"
    },
  ];

  const toggleCursos1 = () => {
    setMostrarCursos1(!mostrarCursos1);
  };

  return (
    <main className="Container_Main_Curriculum">
      <div className="Container_Training">
        <h2 className="Container_Training_h2">FORMACIÓN</h2>

        <div className="Container_Courses_1 Container_all_Courses">
          <div
            className="toggle-header"
            onClick={toggleCursos1}
            role="button"
            tabIndex={0}
            aria-expanded={mostrarCursos1}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") toggleCursos1();
            }}
          >
            <h3 className="Container_Training_h3">
              Centro Propio de Desarrollo Informático y Comunicaciones San Blas
            </h3>
            <span className={`arrow-img ${mostrarCursos1 ? "rotar" : ""}`}>
              <img src="/images/flechaBuena.png" alt="Flecha" />
            </span>
          </div>

          {mostrarCursos1 && (
            <>
              <h4 className="Container_Training_h4">
                DESARROLLO DE APLICACIONES CON TECNOLOGÍAS WEB, Certificado de
                profesionalidad 3
              </h4>
              <p>Duración de la formación asociada: 510 </p>
              <p>Programación web en el entorno cliente: 180h</p>
              <p>Programación web en el entorno servidor: 240h</p>
              <p>
                Implantación de aplicaciones web en entorno internet, intranet y
                extranet: 90h
              </p>
            </>
          )}
        </div>
      </div>

      {/* Habilidades con iconos */}
      {mostrarCursos1 && (
        <div className="Container_Skills">
          <h2 className="Container_Skills_h2">HABILIDADES</h2>
          <div className="Box_Skills">
            {habilidades2.map((hab, index) => (
              <div className="skill-icon" key={index}>
                <img src={hab.img} alt={hab.nombre} title={hab.nombre} />
                <p>{hab.nombre}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
