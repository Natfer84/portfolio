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

    
    
    <div className={`Container_Nav ${menuOpen ? "Open" : ""}`}>
  {/* Botón de menú hamburguesa para móviles */}
      <div className="Menu_Hamburguesa" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="Bar"></div>
        <div className="Bar"></div>
        <div className="Bar"></div>
      </div>

      <nav>
      <ul className="Box__Nav__Ul">
        <li className="Box__Nav__Li">
          <Link to="/Natalia" onClick={() => setMenuOpen(false)}>
            NATALIA
          </Link>
        </li>
        <li className="Box__Nav__Li">
          <Link to="/AboutMe" onClick={() => setMenuOpen(false)}>
            SOBRE MI
          </Link>
        </li>
        <li className="Box__Nav__Li">
          <Link to="/Portfolio">PORTFOLIO</Link>
        </li>
        <li className="Box__Nav__Li">
          <Link to="/Education">EDUCACIÓN</Link>
        </li>
        <li className="Box__Nav__Li">
          <Link to="/Skills">HABILIDADES</Link>
        </li>
        <li className="Box__Nav__Li">
          <Link to="/Contact">CONTACTO</Link>
        </li>
      </ul>

    
      </nav>
    </div>
 
  );
}
