import React from "react";
import "../styles/Curriculum.css";

export default function Curriculum() {
  return (
    <main className="Container_Main_Curriculum">
      <div className="Container_Training">
        <h2 className="Container_Training_h2">FORMACIÓN</h2>
        <div className="Container_Courses">
          <div className="Container_Courses_1">
            <h3 className="Container_Training_h3">
              Centro Propio de Desarrollo Informático y Comunicaciones San Blas
            </h3>

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
          </div>

          <div className="Container_Courses_2">
            <h3 className="Container_Training_h3">
              CENTRO FORMACIÓN ALCOBENDAS
            </h3>

            <h4 className="Container_Training_h4">
              CONFECCIÓN Y PUBLICACIÓN DE PÁGINAS WEB, Certificado de
              profesionalidad C2
            </h4>

            <p>
              <p>Construcción de páginas web. 210 horas.</p>{" "}
              <p>
                Creación de páginas web con el lenguaje de marcas. 80 horas.
              </p>{" "}
              <p>Elaboración de hojas de estilo. 70 horas</p>{" "}
              <p>Elaboración de plantillas y formularios. 60horas.</p>
               <p>Integración de componentes software en páginas web. 180horas. </p>
              <p>Programación con lenguajes de guion en páginas web. 90
              horas. </p>
              <p>Pruebas de funcionalidades y optimización de páginas web.
              90 horas.</p> 
              <p>Publicación de páginas web. 90 horas.</p> 
              <p>MP0278: Módulo de
              prácticas profesionales no laborales de Confección y Publicación
              de Páginas Web 80 horas.</p>
            </p>
          </div>
          <div className="Container_Courses_3"></div>
        </div>
      </div>

      <div className="Container_Skills">
        <h2 className="Container_Skills_h2">HABILIDADES</h2>
        <div className="Box_Skills"></div>
      </div>
    </main>
  );
}
