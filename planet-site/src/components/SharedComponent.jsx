import { useState, useEffect } from "react";
import planetsData from "../assets/data.json"; // დარწმუნდი, რომ გზა სწორია
import "./SharedComponent.css";

export default function SharedComponent({ pathname }) {
  const [select, setSelect] = useState(1);

  // როცა პლანეტა იცვლება, ტაბი დაბრუნდეს Overview-ზე (01)
  useEffect(() => {
    setSelect(1);
  }, [pathname]);

  const planet = planetsData.find(
    (p) => p.name.toLowerCase() === pathname?.toLowerCase()
  ) || planetsData[0];

  if (!planet) return null;

  return (
    <div className="page">
      <div className="main">
        <div className="planet-img-container">
          <img
            className="planet-img"
            src={
              select === 1
                ? planet.images.planet
                : select === 2
                ? planet.images.internal
                : planet.images.geology
            }
            alt={planet.name}
          />
        </div>

        <div className="content">
          <div>
            <h1>{planet.name}</h1>
            <p>
              {select === 1
                ? planet.overview.content
                : select === 2
                ? planet.structure.content
                : planet.geology.content}
            </p>
            <a className="source" href={planet.overview.source} target="_blank" rel="noreferrer">
              Source: Wikipedia ↗
            </a>
          </div>

          <div className="tabs">
            <button 
              className={select === 1 ? "active" : ""} 
              onClick={() => setSelect(1)}
              style={select === 1 ? { backgroundColor: planet.color } : {}}
            >
              01 OVERVIEW
            </button>
            <button 
              className={select === 2 ? "active" : ""} 
              onClick={() => setSelect(2)}
              style={select === 2 ? { backgroundColor: planet.color } : {}}
            >
              02 STRUCTURE
            </button>
            <button 
              className={select === 3 ? "active" : ""} 
              onClick={() => setSelect(3)}
              style={select === 3 ? { backgroundColor: planet.color } : {}}
            >
              03 SURFACE
            </button>
          </div>
        </div>
      </div>

      <div className="stats">
        <div className="stat">
          <span>Rotation Time</span>
          <strong>{planet.rotation}</strong>
        </div>
        <div className="stat">
          <span>Revolution Time</span>
          <strong>{planet.revolution}</strong>
        </div>
        <div className="stat">
          <span>Radius</span>
          <strong>{planet.radius}</strong>
        </div>
        <div className="stat">
          <span>Avg. Temp</span>
          <strong>{planet.temperature}</strong>
        </div>
      </div>
    </div>
  );
}
