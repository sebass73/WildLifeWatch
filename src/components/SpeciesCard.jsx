import React from "react";

const SpeciesCard = ({ species }) => {
  return (
    <div className="species-card">
      <img src={species.imagen} alt={species.nombre} />
      <h3>{species.nombre}</h3>
      <p>{species.descripcion}</p>
      <p className="text-danger">{species.estado}</p>
    </div>
  );
};

export default SpeciesCard;
