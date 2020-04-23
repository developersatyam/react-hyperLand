import React from "react";
import { useFetch } from "./hooks";
import { Container } from "react-bootstrap";
import NavBar from "../Components/NavBar";
import { Link } from "react-router-dom";

const Property = (props) => {
  const link = [
    { name: "Admin", link: "/admin" },
    { name: "Add Individual", link: "/addIndividual" },
    { name: "Add Property", link: "/addProperty" },
  ];
  const [data, loading] = useFetch(
    `http://localhost:3000/api/LandTitle/${props.match.params.id}`
  );

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
        </Container>
      )}
    </div>
  );
};

export default Property;
