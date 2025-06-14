import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

export default function Nav() {
  // Para cambiar el estado del menú, abierto o cerrado
  const [menuOpen, setMenuOpen] = useState(false);

  // Para realizar el efecto de mostrar el menú normal en tamaño ordenador
  useEffect(() => {
    const menuDesk = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", menuDesk);
    return () => window.removeEventListener("resize", menuDesk);
  }, []);

  return (
    <nav>
      <div className={`Container_Nav ${menuOpen ? "Open" : ""}`}>
        {/* Botón de menú hamburguesa para móviles */}
        <div
          className="Menu_Hamburguesa"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="Bar"></div>
          <div className="Bar"></div>
          <div className="Bar"></div>
        </div>

        <section>
          <ul className="Box__Nav__Ul">
            <li className="Box__Nav__Li">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                INICIO
              </Link>
            </li>{" "}
            <li className="Box__Nav__Li">
              <Link to="/AboutMe" onClick={() => setMenuOpen(false)}>
                SOBRE MÍ
              </Link>
            </li>
            <li className="Box__Nav__Li">
              <Link to="/Portfolio" onClick={() => setMenuOpen(false)}>
                PORTFOLIO
              </Link>
            </li>
            <li className="Box__Nav__Li">
              <Link to="/Curriculum">CURRÍCULUM</Link>
            </li>
            <li className="Box__Nav__Li">
              <Link to="/Contact">CONTACTO</Link>
            </li>
          </ul>
        </section>
      </div>
    </nav>
  );
}
