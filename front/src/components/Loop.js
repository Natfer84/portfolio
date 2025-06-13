// components/InfiniteCarousel.jsx

import "../styles/Loop.css";
import { Link } from "react-router-dom";
// components/InfiniteCarousel.jsx
const items = [
  { title: "PORTFOLIO", url: "/Portfolio" },
  { title: "CURRÍCULUM", url: "/Currículum" },
  { title: "SOBRE MÍ", url: "/AboutMe" },
  { title: "CONTACT", url: "/Contacto" },
];

export default function InfiniteCarousel() {
  // duplicamos el array para crear el efecto de bucle infinito
  const duplicatedItems = [...items, ...items];

  return (
    <div className="carousel-wrapper">
      <div className="carousel-track">
        {duplicatedItems.map((item, index) => (
          <Link to={item.url} className="carousel-item">
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
