import React from "react";
import Home from "../pages/Home";
import ConservationProjects from "../pages/ConservationProjects";
import SpeciesDetail from "../pages/SpeciesDetail";
import { useRoutes } from "react-router-dom";
import Donations from "../pages/Donations";
import Educative from "../pages/Educative";

const Routes = () => {
  const rutas = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/projects",
      element: <ConservationProjects />,
    },
    {
      path: "/speciesDetail",
      element: <SpeciesDetail />,
    },
    {
      path: "/donations",
      element: <Donations />,
    },
    {
      path: "/educative",
      element: <Educative />,
    },
  ]);

  return rutas;
};

export default Routes;
