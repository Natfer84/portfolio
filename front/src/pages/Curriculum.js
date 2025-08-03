import { useState } from "react";
import "../styles/Curriculum.css";
import "../styles/Portfolio.css";
import { Link } from "react-router-dom";


export default function Curriculum() {
  const [mostrarCursos1, setMostrarCursos1] = useState(false);
  const [mostrarCursos2, setMostrarCursos2] = useState(false);
  const [mostrarCursos3, setMostrarCursos3] = useState(false);

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
      img: "/images/iconofigma.png",
    },
    {
      nombre: "Wordpress",
      img: "/images/iconsWordpress.png",
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
      img: "/images/iconsReact.png",
    },
    {
      nombre: "Git",
      img: "/images/iconsGit.png",
    },
    {
      nombre: "Github",
      img: "/images/iconsGithub.png",
    },
    {
      nombre: "Firebase",
      img: "/images/iconsFirebase.png",
    },
    {
      nombre: "Mongo DB",
      img: "/images/iconsMongoDb.png",
    },
    {
      nombre: "MySQL",
      img: "/images/iconsMysqlGood.png",
    },
    {
      nombre: "Nodemon",
      img: "/images/iconsNodemon.png",
    },
    {
      nombre: "Node JS",
      img: "/images/iconsNodoJs.png",
    },
    {
      nombre: "Express",
      img: "/images/icons8ExExpress.png",
    },
    {
      nombre: "Jest",
      img: "/images/iconsJest.png",
    },
    {
      nombre: "Jira",
      img: "/images/iconsJira.png",
    },
    {
      nombre: "Netlify",
      img: "/images/iconsNetlify.png",
    },
    {
      nombre: "Selenium",
      img: "/images/iconsSelenium.png",
    },
    {
      nombre: "Vs Code",
      img: "/images/iconsVsCode.png",
    },
  ];

  const habilidades3 =  [
      {
      nombre: "Research",
      img: "/images/iconsResearch.png",
    },
     {
      nombre: "Design",
      img: "/images/iconsDesign.png",
    },
    {
      nombre: "Prototyping",
      img: "/images/iconsPrototyping.png",
    },
    {
      nombre: "Testing",
      img: "/images/iconsTesting.png",
    },
      {
      nombre: "Measurement",
      img: "/images/iconsMeasurement.png",
    },
  ];

  const toggleCursos1 = () => {
    setMostrarCursos1(!mostrarCursos1);
  };
  const toggleCursos2 = () => {
    setMostrarCursos2(!mostrarCursos2);
  };
  const toggleCursos3 = () => {
    setMostrarCursos3(!mostrarCursos3);
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
                profesionalidad C3
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

          {/* Habilidades con iconos curso POSICIÓN 1 San blas*/}
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
        </div>

        {/* POSICION 2: Curso  de alcobendas con habilidades debajo*/}
        <div className="Container_Courses_1 Container_all_Courses">
          <div
            className="toggle-header"
            onClick={toggleCursos2}
            role="button"
            tabIndex={0}
            aria-expanded={mostrarCursos2}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") toggleCursos2();
            }}
          >
            <h3 className="Container_Training_h3">Centro de formación de Alcobendas</h3>
            <span className={`arrow-img ${mostrarCursos2 ? "rotar" : ""}`}>
              <img src="/images/flechaBuena.png" alt="Flecha" />
            </span>
          </div>

          {mostrarCursos2 && (
            <>
              <h4 className="Container_Training_h4">CONFECCIÓN Y PUBLICACIÓN DE PÁGINAS WEB. Certificado de
                profesionalidad C2</h4>
              <p>Duración de la formación asociada: 480h</p>
              <p>Construir págins web </p>
              <p>Integraciñon de componentes software en páginas web </p>
              <p>Publicaión de páginas web</p>
            </>
          )}
          {/* Habilidades con iconos curso POSICIÓN 2 alcobendas*/}
          {mostrarCursos2 && (
            <div className="Container_Skills">
              <h2 className="Container_Skills_h2">HABILIDADES</h2>
              <div className="Box_Skills">
                {habilidades.map((hab, index) => (
                  <div className="skill-icon" key={index}>
                    <img src={hab.img} alt={hab.nombre} title={hab.nombre} />
                    <p>{hab.nombre}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* ********* FIN ********POSICION 2: Curso  de alcobendas con habilidades debajo*/}

        {/* POSICION 3: Curso UX GOOGLE*/}
        <div className="Container_Courses_1 Container_all_Courses">
          <div
            className="toggle-header"
            onClick={toggleCursos3}
            role="button"
            tabIndex={0}
            aria-expanded={mostrarCursos3}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") toggleCursos3();
            }}
          >
            <h3 className="Container_Training_h3">Certificado profesional de Diseño y experiencia del usuario UX de Google</h3>
            <span className={`arrow-img ${mostrarCursos3 ? "rotar" : ""}`}>
              <img src="/images/flechaBuena.png" alt="Flecha" />
            </span>
          </div>

          {mostrarCursos3 && (
            <>
              <h4 className="Container_Training_h4">Certificado profesional de Diseño y experiencia del usuario UX de Google</h4>
              <p>Duración de la formación asociada: 150h</p>
              
            </>
          )}
          {/* Habilidades con iconos curso: POSICIÓN 3 UX GOOGLE*/}
          {mostrarCursos3 && (
            <div className="Container_Skills">
              <h2 className="Container_Skills_h2">HABILIDADES</h2>
              <div className="Box_Skills">
                {habilidades3.map((hab, index) => (
                  <div className="skill-icon" key={index}>
                    <img src={hab.img} alt={hab.nombre} title={hab.nombre} />
                    <p>{hab.nombre}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* ********* FIN ********POSICION 3: UX GOOGLE*/}

        {/*accesos directos*/}
        <section className="Container_Shortcut">
        <span className="Container_Shortcut_Span">
          {/*<a href="/">INICIO</a>*/}
          <Link to="/">INICIO</Link>
        </span>
        <span className="Container_Shortcut_Span">
          {/*<a href="/AboutMe">SOBRE MÍ</a>*/}
          <Link to="/Portfolio">SOBLE MÍ</Link>
        </span>
        <span className="Container_Shortcut_Span">
          {/*<a href="/Contacto">CONTACTO</a>*/}
          <Link to="/Contact">PROYECTOS</Link>
        </span>
      </section>

      </div>
    </main>
  );
}
