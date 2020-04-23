import React, { useState } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";

import NavBar from "../Components/NavBar";

const AddRegistrar = () => {
  const link = [
    { name: "Admin", link: "admin" },
    { name: "Add Individual", link: "addIndividual" },
    { name: "Add Property", link: "addProperty" },
  ];
  const [rId, changerId] = useState(0);
  const [name, changename] = useState("");
  const [Designation, changeDesignation] = useState("");
  const [bankBal, changebankBal] = useState(0);
  const [isSubmitting, changeSubmitting] = useState(false);

  // var date=moment();
  // var abc=moment(date).format('DD/MM/YYYY');
  // console.log(abc);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const payload = {
      $class: "org.landregv0.Registerar",
      rId,
      name,
      Designation,
      bankBal,
    };
    var data = JSON.stringify(payload);
    axios
      .post("http://localhost:3000/api/Registerar", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        changeSubmitting(true);
        console.log("Submitted!");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <NavBar links={link} />
      <Container>
        <h1>Add Registrar Page</h1>
        <form onSubmit={onFormSubmit}>
          <label>ID</label>
          <Form.Control
            type="number"
            value={rId}
            onChange={(e) => changerId(e.target.value)}
          />
          <br />
          <label>Name</label>
          <Form.Control
            value={name}
            onChange={(e) => changename(e.target.value)}
          />
          <br />
          <label>Designation</label>
          <Form.Control
            value={Designation}
            onChange={(e) => changeDesignation(e.target.value)}
          />
          <br />
          <label>Bank Balance</label>
          <Form.Control
            value={bankBal}
            onChange={(e) => changebankBal(e.target.value)}
          />
          <br />

          <Button
            variant={!isSubmitting ? "primary" : "success"}
            type="submit"
            value="Submit"
          >
            Add Property
          </Button>
        </form>
      </Container>
      <br />
    </div>
  );
};

export default AddRegistrar;
