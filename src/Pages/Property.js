import React from "react";
import { useFetch } from "./hooks";
import { Container } from 'react-bootstrap';

const NotFound = (props) => {
  const [data, loading] = useFetch(
    `http://localhost:3000/api/LandTitle/${props.match.params.id}`
  );
  console.log("data", data);
  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <Container>
          <h2>
            Plot No. {data.address.plotNo}, {data.address.addressLine1},{" "}
            {data.address.adreessLine2}, {data.address.city},{" "}
            {data.address.distict}, {data.address.state},{data.address.state},
            {data.address.postalCode}
          </h2>
          <p>Plot Value: Rs.{data.marketValue}</p>
          <p>Property Type: {data.property_type}</p>
          <p>Registered At: {data.registration_date}</p>
      <p>Owned by: {data.owner}</p>
        </Container>
      )}
    </div>
  );
};

export default NotFound;
