import React from "react";
import '../styles/components/speciesCard.scss'

const SpeciesCard = ({ species }) => {
  return (
    <>
      <div className="card">
        <img src={species.imagen} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{species.nombre}</h5>
          <p className="card-text">{species.descripcion}</p>
          <button href="#" className="btn" style={{backgroundColor: '#ff5722'}}>
            Donate
          </button>
        </div>
      </div>
    </>
  );
};

export default SpeciesCard;
