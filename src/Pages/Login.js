import React, { useState, useEffect } from "react";
import axios from "axios";
import { reactLocalStorage } from "reactjs-localstorage";
import { useHistory } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import { backApi } from "../URL";

import NavBar from "../Components/NavBar";

const Login = () => {
  let history = useHistory();
  const [aadharNumber, changeAadharNum] = useState(0);
  useEffect(() => {
    const CookieUser = reactLocalStorage.getObject("CookieIndi");
    if (CookieUser.user) {
      history.push(`/user/${CookieUser.user}`);
    }
  });

  const link = [{ name: "Registrar", link: "registrar" }];

  const onFormSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`${backApi}/api/Individual/${aadharNumber}`)
      .then((user) => {
        console.log(user.data);
        reactLocalStorage.setObject("CookieIndi", { user: `${aadharNumber}` });
        history.push(`/user/${aadharNumber}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div class="body">
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

          <br />
          <Button variant="success" type="submit" value="Submit" class="btn">
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
