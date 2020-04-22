import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";

import NavBar from "../Components/NavBar";

const AddIndividual = () => {
  const link = [
    { name: "Add Property", link: "addProperty" },
    { name: "Registrar", link: "registrar" },
  ];

  const [aadharNumber, changeAadharNum] = useState(0);
  const [first_name, changefirst_name] = useState("");
  const [last_name, changelast_name] = useState("");
  const [father_name, changefather_name] = useState("");
  const [pancard_no, changepancard_no] = useState("");
  const [postalCode, changepostalCode] = useState("");
  const [addressLine1, changeaddressLine1] = useState("");
  const [adreessLine2, changeadreessLine2] = useState("");
  const [city, changecity] = useState("");
  const [distict, changedistict] = useState("");
  const [state, changestate] = useState("");
  const [gender, changegender] = useState("");
  const [bankBal, changebankBal] = useState(0);
  const [mode, changemode] = useState("");
  const [bidAmount, changebidAmount] = useState(0);
  const [isSubmitting, changeSubmitting] = useState(false);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const payload = {
      $class: "org.landregv0.Individual",
      aadharNumber,
      first_name,
      last_name,
      father_name,
      pancard_no,
      address: {
        $class: "org.landregv0.IndianAddress",
        postalCode,
        addressLine1,
        adreessLine2,
        city,
        distict,
        state,
      },
      gender,
      bankBal,
      mode,
      status: "DEFAULT",
      bidAmount,
    };
    var data = JSON.stringify(payload);
    console.log(data);
    axios
      .post("http://localhost:3000/api/Individual", data, {
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
        <h1>Add Individual Page</h1>
        <form onSubmit={onFormSubmit}>
          <label>Aadhar Number</label>
          <Form.Control
            type="number"
            value={aadharNumber}
            onChange={(e) => changeAadharNum(e.target.value)}
          />
          <br />
          <label>First Name</label>
          <Form.Control
            value={first_name}
            onChange={(e) => changefirst_name(e.target.value)}
          />
          <br />
          <label>Last Name</label>
          <Form.Control
            value={last_name}
            onChange={(e) => changelast_name(e.target.value)}
          />
          <br />
          <label>Father Name</label>
          <Form.Control
            value={father_name}
            onChange={(e) => changefather_name(e.target.value)}
          />
          <br />
          <label>PAN Card No</label>
          <Form.Control
            value={pancard_no}
            onChange={(e) => changepancard_no(e.target.value)}
          />
          <br />
          <label>Postal Code</label>
          <Form.Control
            value={postalCode}
            onChange={(e) => changepostalCode(e.target.value)}
          />
          <br />
          <label>Address Line 1</label>
          <Form.Control
            value={addressLine1}
            onChange={(e) => changeaddressLine1(e.target.value)}
          />
          <br />
          <label>Address Line 2</label>
          <Form.Control
            value={adreessLine2}
            onChange={(e) => changeadreessLine2(e.target.value)}
          />
          <br />
          <label>City</label>
          <Form.Control
            value={city}
            onChange={(e) => changecity(e.target.value)}
          />
          <br />
          <label>District</label>
          <Form.Control
            value={distict}
            onChange={(e) => changedistict(e.target.value)}
          />
          <br />
          <label>State</label>
          <Form.Control
            value={state}
            onChange={(e) => changestate(e.target.value)}
          />
          <br />
          <label>Gender</label>
          <Form.Control
            value={gender}
            onChange={(e) => changegender(e.target.value)}
          />
          <br />
          <label>Bank Balance</label>
          <Form.Control
            value={bankBal}
            onChange={(e) => changebankBal(e.target.value)}
          />
          <br />
          <label>Mode</label>
          <Form.Control
            value={mode}
            onChange={(e) => changemode(e.target.value)}
          />
          <br />{" "}
          <Button
            variant={!isSubmitting ? "primary" : "success"}
            type="submit"
            value="Submit"
          >
            Add Individual
          </Button>
        </form>
      </Container>
      <br />
    </div>
  );
};

export default AddIndividual;
