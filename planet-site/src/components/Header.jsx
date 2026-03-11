import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

  return (
    <header className="header">
      <span className="logo">THE PLANETS</span>
      <nav className="navDiv">
        {planets.map((p) => (
          <Link key={p} to={`/${p.toLowerCase()}`}>
            <button>{p}</button>
          </Link>
        ))}
      </nav>
    </header>
  );
}