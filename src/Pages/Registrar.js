import React from "react";
import { Link } from "react-router-dom";

import NavBar from "../Components/NavBar";

const Registrar = () => {
  const link = [
    { name: "Add Property", link: "addProperty" },
    { name: "Add Individual", link: "addIndividual" },
  ];
  return (
    <div>
      <NavBar links={link} />
      <h1>Registrar</h1>
    </div>
  );
};

export default Registrar;
