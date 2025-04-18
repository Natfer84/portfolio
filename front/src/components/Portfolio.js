import React from "react";
import "../styles/Portfolio.css";

export default function Portfolio() {
  const jobs = [
    {
      id: 1,
      image: "/images/10_yNatalia.jpg",
      name: "Tribial",
      descripcion: "Pequeño juego de trivial",
      video: " ",
    },
    {
      id: 2,
      image: "/images/10_yNatalia.jpg",
      name: "Tienda Pokemon",
      descripcion: "Tinda de Pokemon",
      video: " ",
    },
    {
      id: 3,
      image: "/images/10_yNatalia.jpg",
      name: "Tienda Creatividad",
      descripcion: "Tienda Creatividad",
      video: " ",
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
            <div className="Container_job_enlace">
              <a
                href="https://portfolionatperson.netlify.app"
                className="Container_job_enlace_a"
              >
                <img
                  src="images/logoEnlace4.png"
                  alt="logo de enlace"
                  className="Container_job_enlace_img"
                ></img>
              </a>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
