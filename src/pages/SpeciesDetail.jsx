import React from "react";
import SpeciesList from "../components/SpeciesList";

const SpeciesDetail = () => {
  return (
    <>
      <h2 className="display-4 text-center mb-4 mt-4">
        Species in Need of Conservation
      </h2>
      <SpeciesList />
    </>
  );
};

export default SpeciesDetail;
