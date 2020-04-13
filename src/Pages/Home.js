import React from "react";

import NavBar from "../Components/NavBar";
import PropCard from "../Components/PropCard";
import { useFetch } from "./hooks";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function Home() {
  const [data, loading] = useFetch(
    "http://localhost:3000/api/queries/ListLandTitlesForSale"
  );
  const link = [
    { name: "login", link: "login" },
    { name: "Sign Up", link: "signup" },
  ];
  return (
    <>
      <NavBar links={link} />
      <Container>
        <h1>Properties Near You</h1>
        {loading ? (
          "Loading..."
        ) : (
          <ul>
            {data.map((property) => (
              <Link to={`property/${property.id}`}>
                <PropCard
                  key={property.id}
                  onCli
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
