import React from "react";
import "../styles/AboutMe.css";
import { Link } from "react-router-dom";


export default function AboutMe() {
  return (
    <main className="Container_Main_AboutMe">
      <div className="Container_AboutMe">
        <h1>UN POCO SOBRE MÍ</h1>
        <p>
          Después de más de 15 años dedicándome al mundo administrativo, decidí
          hacer una pausa, mirar hacia adentro y preguntarme:{" "}
          <b>¿qué quiero construir ahora?</b>{" "}
          <p>
            La respuesta me llevó por un camino completamente nuevo:{" "}
            <b>el desarrollo y diseño de aplicaciones web.</b>{" "}
          </p>
        </p>
        <p>
          No ha sido una decisión fácil, pero sí una de las más emocionantes de
          mi vida. Estoy en pleno proceso de transformación profesional.
          <p>
            Cada línea de código, cada diseño, cada error y cada logro me
            conectan con una nueva versión de mí misma.
          </p>
        </p>
        <p>
          Me estoy reinventando, y lo estoy haciendo con una mezcla de
          entusiasmo, curiosidad y muchísima pasión.
        </p>
        <p>
          <p>He vuelto a ser aprendiz, y eso me llena de vida.</p>
          Mi meta no es solo dominar una nueva herramienta o tecnología; es{" "}
          <b>aportar valor real</b>, trabajar en proyectos que inspiren, y
          crecer junto a equipos que creen en la colaboración y en el
          aprendizaje constante.
        </p>
        <p>
          Sé que tengo un largo camino por delante, pero también sé que es el
          camino correcto.
        </p>
        <p>
          Me encantaría encontrar un espacio donde pueda{" "}
          <b>seguir creciendo cada día</b>, donde el esfuerzo se convierta en
          impacto, y los sueños, en código.
        </p>
        <p>
          Porque no solo estoy cambiando de carrera: estoy construyendo un nuevo
          propósito.
        </p>
      </div>
      <section className="Container_Shortcut">
        <span className="Container_Shortcut_Span">
          {/*<a href="/">INICIO</a>*/}
          <Link to="/">INICIO</Link>
        </span>
        <span className="Container_Shortcut_Span">
          {/*<a href="/AboutMe">SOBRE MÍ</a>*/}
          <Link to="/Portfolio">PROYECTOS</Link>
        </span>
        <span className="Container_Shortcut_Span">
          {/*<a href="/Contacto">CONTACTO</a>*/}
          <Link to="/Contact">CONTACTO</Link>
        </span>
      </section>
      
    </main>
  );
}
