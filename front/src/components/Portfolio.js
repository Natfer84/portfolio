import React from "react";
import "../styles/Portfolio.css";
import "../styles/Natalia.css";

export default function Portfolio() {
  const jobs = [
    {
      id: 1,
      image: "/images/creanunate.png",
      name: "Tienda Creatividad",
      descripcion:
        "Proyecto final del curso de Desarrollo de Aplicaciones con Tecnología Web, desarrollado con el stack MERN. Se trata de una tienda creativa donde el usuario puede explorar todos los cursos disponibles, así como los próximos lanzamientos. Los usuarios pueden registrarse y acceder a un área personal, donde podrán ver sus cursos favoritos o los que hayan adquirido. Actualmente se encuentra en su versión v1.0.0, con nuevas funcionalidades en desarrollo.",
      link: "https://tiendapokemania.netlify.app",
      github: "https://github.com/Natfer84/creanunate.git",
    },
    {
      id: 1,
      image: "/images/halloween.png",
      name: "Cuestionario de Halloween",
      descripcion:
        "Proyecto de Halloween desarrollado exclusivamente con HTML, JavaScript y CSS. El usuario puede seleccionar una categoría y responder un cuestionario de diez preguntas. Por cada respuesta correcta, se incrementa un contador de puntuación. Las preguntas se obtienen dinámicamente desde una API REST.",
      link: "https://tiendapokemania.netlify.app",
      github: "https://github.com/Natfer84/quiz_halloween.git",
    },
    {
      id: 2,
      image: "/images/Pokemon.png",
      name: "Tienda Pokémon",
      descripcion:
        "Proyecto realizado con React. Obtiene los Pokémon desde una API REST y permite agregarlos a un carrito de selección. Dentro del carrito, el usuario puede aumentar o disminuir la cantidad de cada Pokémon, o eliminarlos completamente.",
      link: "https://tiendapokemania.netlify.app",
      github: "https://github.com/Natfer84/tienda_pokemon.git",
    },
    {
      id: 3,
      image: "/images/halloween.png",
      name: "Cuestionario de Halloween",
      descripcion:
        "Proyecto de Halloween desarrollado exclusivamente con HTML, JavaScript y CSS. El usuario puede seleccionar una categoría y responder un cuestionario de diez preguntas. Por cada respuesta correcta, se incrementa un contador de puntuación. Las preguntas se obtienen dinámicamente desde una API REST.",
      link: "https://tiendapokemania.netlify.app",
      github: "https://github.com/Natfer84/quiz_halloween.git",
    },
  ];
  return (
    <div className="Container_Porfolio">
      {/*puede ir un h1*/}

      <div className="Container_box_jsonJobs">
        {jobs.map((job) => (
          <div key={job.id} className="Container_job">
            <img
              src={job.image}
              alt={job.name}
              className="Container_job_image"
            />{" "}
            <h2 className="Container_job_h2">{job.name}</h2>
            <p className="Container_job_p">{job.descripcion}</p>
            {/*aqui va el enlace*/}
            <div className="Container_job_link">
              <div className="Container_job_link_web">
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Container_job_link_a"
                >
                  <img
                    src="images/logoEnlace4.png"
                    alt="logo de enlace"
                    className="Container_job_link_img"
                  ></img>
                </a>
              </div>

              <div className="Container_job_link_github">
                <a
                  href={job.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Container_job_link_a"
                >
                  <img
                    src="images/github.jpg"
                    alt="logotipo github"
                    className="Container_job_link_img"
                  >
                  </img>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
