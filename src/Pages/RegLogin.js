import React, { useState, useEffect } from "react";
import axios from "axios";
import { reactLocalStorage } from "reactjs-localstorage";
import { useHistory } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import { backApi } from "../URL";

import NavBar from "../Components/NavBar";

const RegLogin = () => {
  let history = useHistory();
  const [rId, changerId] = useState(0);
  useEffect(() => {
    const CookieUser = reactLocalStorage.getObject("CookieReg");
    console.log(CookieUser);
    if (CookieUser.user) {
      history.push(`/registrar/${CookieUser.user}`);
    }
  });

  const link = [{ name: "Registrar", link: "registrar" }];

  const onFormSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`${backApi}/api/Registerar/${rId}`)
      .then((user) => {
        console.log(user.data);
        reactLocalStorage.setObject("CookieReg", { user: `${rId}` });
        console.log(reactLocalStorage.getObject("CookieReg"));
        history.push(`/registrar/${rId}`);
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
        <label>Enter your Registrar Id</label>
        <form onSubmit={onFormSubmit}>
          <Form.Control
            type="number"
            value={rId}
            onChange={(e) => changerId(e.target.value)}
          />
          <br />

          <Button variant="success" type="submit" value="Submit"  class="btn">
            Login
          </Button>
        </form>
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

export default RegLogin;
