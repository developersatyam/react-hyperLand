import React, { useState } from "react";

import NavBar from "../Components/NavBar";
import PropCard from "../Components/PropCard";
import { reactLocalStorage } from "reactjs-localstorage";
import { useFetch } from "./hooks";
import { backApi } from "../URL";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function Home() {
  const [data, loading] = useFetch(
    `${backApi}/api/queries/ListLandTitlesForSale`
  );
  let user = "";
  const CookieUser = reactLocalStorage.getObject("CookieUser");
  if (CookieUser) {
    user = CookieUser.user;
  }
  const link = [
    { name: "User", link: "login" },
    { name: "Registrar", link: "registrar" },
  ];

  return (
    <>
      <NavBar links={link} />
      <Container>
        <h1>Properties Near You</h1>
        {loading ? (
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
        ) : (
          <ul>
            {data.map((property) => (
              <Link key={property.id} to={`property/${property.id}`}>
                <PropCard
                  plotNo={property.address.plotNo}
                  postalCode={property.address.postalCode}
                  area={property.area}
                  addressLine1={property.address.addressLine1}
                  adreesLine2={property.address.adreesLine2}
                  city={property.address.city}
                  district={property.address.district}
                  state={property.address.state}
                  forSale={property.forSale}
                  marketValue={property.marketValue}
                  property_type={property.property_type}
                  owner={property.owner}
                  registration_date={property.registration_date}
                />
              </Link>
            ))}
          </ul>
        )}
      </Container>
    </>
  );
}

export default Home;
