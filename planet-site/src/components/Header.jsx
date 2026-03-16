import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

  return (
    <header className="header">
      <span className="logo">THE PLANETS</span>
      
      {/* ჰამბურგერ ღილაკი */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className={isOpen ? "line open" : "line"}></div>
        <div className={isOpen ? "line open" : "line"}></div>
        <div className={isOpen ? "line open" : "line"}></div>
      </div>

      <nav className={`navDiv ${isOpen ? "active" : ""}`}>
        {planets.map((p) => (
          <Link key={p} to={`/${p.toLowerCase()}`} onClick={() => setIsOpen(false)}>
            <div className="nav-item">
              <div className={`circle ${p.toLowerCase()}`}></div>
              <button>{p}</button>
              <span className="arrow">›</span>
            </div>
          </Link>
        ))}
      </nav>
    </header>
  );
}
