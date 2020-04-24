import React, { useReducer } from "react";
import { useFetch } from "./hooks";
import NavBar from "../Components/NavBar";
import { Container } from "react-bootstrap";
import { backApi } from "../URL";

const Property = (props) => {
  const [data, loading] = useFetch(
    `${backApi}/api/Individual/${props.match.params.id}`
  );
  const [lands, abc] = useFetch(
    `${backApi}/api/queries/ListOwnedLandTitles?owner=${props.match.params.id}`
  );
  const link = [
    { name: "Admin", link: "/admin" },
    { name: "Registrar", link: "/registrar" },
  ];
  console.log(lands);
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
            Hello, {data.first_name} {data.last_name}
          </h2>
          <p>Aadhar Number: {data.aadharNumber}</p>
          <p>
            Address: {data.address.addressLine1}, {data.address.adreessLine2},
            {data.address.city}, {data.address.distict}, {data.address.state}-
            {data.address.postalCode}
          </p>
          <p>Bank Balance: {data.bankBal}</p>
          <p>Father: {data.father_name}</p>
          <p>Gender: {data.gender}</p>
          <p>Mode: {data.mode}</p>
          <p>PAN Card: {data.pancard_no}</p>
          <p>Status: {data.status}</p>
        </Container>
      )}
    </div>
  );
};

export default Property;
