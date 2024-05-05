import React, { useEffect, useState } from "react";
import SpeciesCard from "./SpeciesCard";

const SpeciesList = () => {
  //const species =

  const [species, setSpecies] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:8080/animales");
      if (!res.ok) {
        throw new Error(`HTTP Error status ${res.status} - ${res.statusText}`);
      }

      const data = await res.json();
      setSpecies(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="species-list">
      {species && species.map((species) => (
        <SpeciesCard key={species.id} species={species} />
      ))}
    </div>
  );
};

export default SpeciesList;
