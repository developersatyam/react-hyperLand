import React, { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";

import NavBar from "../Components/NavBar";

const Login = () => {
  let history = useHistory();
  const user = useSelector((state) => state.user);
  // if (user) history.push(`/user/${user.aadharNumber}`);

  const link = [
    { name: "Add Property", link: "addProperty" },
    { name: "Registrar", link: "registrar" },
  ];

  const [aadharNumber, changeAadharNum] = useState(0);
  const [isSubmitting, changeIsSubmitting] = useState(false);

  const onFormSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:3000/api/Individual/${aadharNumber}`)
      .then((user) => {
        console.log(user.data);
        history.push(`/user/${aadharNumber}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <NavBar links={link} />
      <Container>
        <h1>Login</h1>
        <label>Enter your Aadhar Number</label>
        <form onSubmit={onFormSubmit}>
          <Form.Control
            type="number"
            value={aadharNumber}
            onChange={(e) => changeAadharNum(e.target.value)}
          />
          <br />
          <Button
            variant={!isSubmitting ? "primary" : "success"}
            type="submit"
            value="Submit"
          >
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
