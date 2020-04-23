import React, { useReducer } from "react";
import { useFetch } from "./hooks";
import axios from "axios";
import Navbar from "../Components/NavBar";
import { Container, Button } from "react-bootstrap";
import moment from "moment";

const Property = (props) => {
  const [data, loading] = useFetch(
    `http://localhost:3000/api/Registerar/${props.match.params.rId}`
  );
  const [pendingCases, abc] = useFetch(
    `http://localhost:3000/api/PendingLandTransaction`
  );

  const link = [
    { name: "Admin", link: "/admin" },
    { name: "Registrar", link: "/registrar" },
  ];

  const acceptFn = (id) => {
    const pending = pendingCases.find((cases) => cases.id === id);
    const payload = {
      $class: "org.landregv0.TransferLandTitle",
      pendingLandTransaction: `resource:org.landregv0.PendingLandTransaction#${pending.id}`,
      buyer: `${pending.buyer}`,
      seller: `${pending.seller}`,
      accept: "true",
      reason: "Good Prop",
      transactionId: "123124",
      timestamp: moment(),
    };
    var data = JSON.stringify(payload);
    axios
      .post("http://localhost:3000/api/TransferLandTitle", data, {
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
      <Navbar links={link} />
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
          <h1>
            Welcome, {data.name} ({data.rId})
          </h1>
          <p>Designation: {data.Designation}</p>
          <p>Bank Balance: {data.bankBal}</p>
          <br />
          <h2>These are the pending cases</h2>
          {abc ? (
            <div className="loading-wrap">
              <p>Loading...</p>
            </div>
          ) : (
            <ul>
              {pendingCases.map((cases) => (
                <div key={cases.id} className="pending-cases">
                  <p>Land: {cases.land}</p>
                  <p>Buyer: {cases.buyer}</p>
                  <p>Seller: {cases.seller}</p>
                  <p>State: {cases.state}</p>
                  <Button
                    onClick={(e) => acceptFn(cases.id)}
                    className="success"
                  >
                    Accept
                  </Button>
                </div>
              ))}
            </ul>
          )}
        </Container>
      )}
    </div>
  );
};

export default Property;
