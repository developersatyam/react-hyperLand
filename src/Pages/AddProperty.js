import React, { useState } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import moment from "moment";
import { backApi } from "../URL";

import NavBar from "../Components/NavBar";

const AddProperty = () => {
  const link = [
    { name: "Admin", link: "admin" },
    { name: "Add Individual", link: "addIndividual" },
    { name: "Registrar", link: "registrar" }
  ];
  const [id, changeId] = useState(0);
  const [plotNo, changeplotNo] = useState("");
  const [postalCode, changepostalCode] = useState("");
  const [addressLine1, changeaddressLine1] = useState("");
  const [adreessLine2, changeadreessLine2] = useState("");
  const [city, changecity] = useState("");
  const [distict, changedistict] = useState("");
  const [state, changestate] = useState("");
  const [area, changearea] = useState("");
  const [forSale, changeforSale] = useState(false);
  const [marketValue, changemarketValue] = useState(0);
  const [property_type, changeproperty_type] = useState("");
  const [owner, changeowner] = useState("");
  const [isSubmitting, changeSubmitting] = useState(false);

  // var date=moment();
  // var abc=moment(date).format('DD/MM/YYYY');
  // console.log(abc);

  const onFormSubmit = e => {
    e.preventDefault();
    const payload = {
      $class: "org.landregv0.LandTitle",
      id,
      DocumentSignature: "",
      address: {
        $class: "org.landregv0.LandAddress",
        plotNo,
        postalCode,
        addressLine1,
        adreessLine2,
        city,
        distict,
        state
      },
      area,
      forSale,
      marketValue,
      property_type,
      registration_date: moment(),
      owner: `resource:org.landregv0.Individual#${owner}`
    };
    var data = JSON.stringify(payload);
    axios
      .post(`${backApi}/api/LandTitle`, data, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(function(response) {
        changeSubmitting(true);
        console.log("Submitted!");
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <div class="body">
      <NavBar links={link} />
      <Container>
        <h1>Add Property Page</h1>
        <form onSubmit={onFormSubmit}>
          <label>ID</label>
          <Form.Control
            type="number"
            value={id}
            onChange={e => changeId(e.target.value)}
          />
          <br />
          <label>Plot No</label>
          <Form.Control
            value={plotNo}
            onChange={e => changeplotNo(e.target.value)}
          />
          <br />
          <label>Postal Code</label>
          <Form.Control
            value={postalCode}
            onChange={e => changepostalCode(e.target.value)}
          />
          <br />
          <label>Address Line 1</label>
          <Form.Control
            value={addressLine1}
            onChange={e => changeaddressLine1(e.target.value)}
          />
          <br />
          <label>Address Line 2</label>
          <Form.Control
            value={adreessLine2}
            onChange={e => changeadreessLine2(e.target.value)}
          />
          <br />

          <label>City</label>
          <Form.Control
            value={city}
            onChange={e => changecity(e.target.value)}
          />
          <br />
          <label>District</label>
          <Form.Control
            value={distict}
            onChange={e => changedistict(e.target.value)}
          />
          <br />
          <label>State</label>
          <Form.Control
            value={state}
            onChange={e => changestate(e.target.value)}
          />
          <br />
          <label>Area (in sq. meters)</label>
          <Form.Control
            value={area}
            onChange={e => changearea(e.target.value)}
          />
          <br />
          <label>For Sale</label>
          <Form.Control
            value={forSale}
            onChange={e => changeforSale(e.target.value)}
          />
          <br />
          <label>Market value</label>
          <Form.Control
            value={marketValue}
            onChange={e => changemarketValue(e.target.value)}
          />
          <br />

          <label>Property Type</label>
          <Form.Control
            value={property_type}
            onChange={e => changeproperty_type(e.target.value)}
          />
          <br />
          <label>Owner (Aadhar Number)</label>
          <Form.Control
            value={owner}
            onChange={e => changeowner(e.target.value)}
          />
          <br />
          <Button
            variant={!isSubmitting ? "primary" : "success"}
            type="submit"
            value="Submit"
            class="btn"
          >
            Add Property
          </Button>
        </form>
      </Container>
      <br />
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
      <br></br> <br></br>
      <footer>
        <div class="sun"></div>
        <div class="grass"></div>
      </footer>
    </div>
  );
};

export default AddProperty;
