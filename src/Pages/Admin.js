import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Admin = () => {
  return (
    <div class="body">
      <Container>
        <br />
        <h1>Welcome Admin</h1>
        <Link to="/addRegistrar">Add Registrar</Link>
        <br />
        <Link to="/addIndividual">Add Individual</Link>
        <br />
        <Link to="/addProperty">Add Property</Link>
      </Container>
      <br></br>       <br></br>       <br></br>      <br></br>      <br></br>      <br></br>     <br></br>      <br></br>      <br></br>      <br></br>      <br></br>     <br></br>      <br></br>      <br></br>
      <br></br>      <br></br>
      <footer>
        <div class="sun"></div>
        <div class="grass"></div>
      </footer>
    </div>
  );
};

export default Admin;
