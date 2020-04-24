import React, { useState } from "react";
import { useFetch } from "./hooks";
import { Container, Form, Button } from "react-bootstrap";
import NavBar from "../Components/NavBar";
import { Link } from "react-router-dom";
import axios from "axios";
import { backApi } from "../URL";
import { reactLocalStorage } from "reactjs-localstorage";

const Property = (props) => {
  const link = [
    { name: "Admin", link: "/admin" },
    { name: "Add Individual", link: "/addIndividual" },
    { name: "Add Property", link: "/addProperty" },
  ];
  const [data, loading] = useFetch(
    `${backApi}/api/LandTitle/${props.match.params.id}`
  );
  const [bidAmount, changeBidAmount] = useState(0);

  const user = reactLocalStorage.getObject("CookieIndi");

  const onBidSubmit = (e) => {
    e.preventDefault();
    const payload = {
      $class: "org.landregv0.LandBid",
      id: "string",
      land: `resource:org.landregv0.LandTitle#${props.match.params.id}`,
      bidder: `resource:org.landregv0.Individual#${user.id}`,
      seller: data.owner,
      bidAmount,
    };
    var data2 = JSON.stringify(payload);
    axios
      .post(`${backApi}/api/LandBid`, data2, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        console.log("Submitted!");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <NavBar links={link} />
      {loading ? (
        <div className="loading">
          <div className="loading-wrap">
            <div className="lds-spinner">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      ) : (
        <Container>
          <br />
          <h2>
            Plot No. {data.address.plotNo}, {data.address.addressLine1},{" "}
            {data.address.adreessLine2}, {data.address.city},{" "}
            {data.address.distict}, {data.address.state},{data.address.state},
            {data.address.postalCode}
          </h2>
          <p>Plot Value: Rs.{data.marketValue}</p>
          <p>Property Type: {data.property_type}</p>
          <p>Registered At: {data.registration_date}</p>
          <Link to={`/user/${data.owner.substring(34)}`}>
            <p>Owned by: {data.owner.substring(34)}</p>
          </Link>
          {user ? (
            <form onSubmit={onBidSubmit}>
              <label>Enter your bidding Amount</label>
              <Form.Control
                type="number"
                value={bidAmount}
                onChange={(e) => changeBidAmount(e.target.value)}
              />
              <br />
              <Button variant="success" type="submit" value="Submit">
                Bid
              </Button>
            </form>
          ) : (
            <div>No User</div>
          )}
        </Container>
      )}
    </div>
  );
};

export default Property;
