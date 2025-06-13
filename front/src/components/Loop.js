// components/InfiniteCarousel.jsx

import "../styles/Loop.css";

// components/InfiniteCarousel.jsx
const items = [
  { title: "PORTFOLIO", url: "/Portfolio" },
  { title: "CURRÍCULUM", url: "/Currículum" },
  { title: "SOBRE MÍ", url: "/AboutMe"},
  { title: "CONTACTO", url: "/Contacto" },
];

export default function InfiniteCarousel() {
  // duplicamos el array para crear el efecto de bucle infinito
  const duplicatedItems = [...items, ...items];

  return (
    <div className="carousel-wrapper">
      <div className="carousel-track">
        {duplicatedItems.map((item, index) => (
          <a
            key={index}
            href={item.url}
            className="carousel-item"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
}
