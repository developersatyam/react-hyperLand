import React from "react";
import moment from "moment";

const PropCard = (data) => {
  return (
    <div className="prop-card">
      <h3>
        Plot No. {data.plotNo}, {data.addressLine1},{data.adreessLine2},{" "}
        {data.city}, {data.distict}, {data.state},{data.state},{data.postalCode}
      </h3>
      <p>Plot Value: Rs.{data.marketValue}</p>
      <p>Property Type: {data.property_type}</p>
      <p> {data.registration_date}</p>
      <p>
        Registered At: {moment(data.registration_date).format("DD/MM/YYYY")}
      </p>
    </div>
  );
};

export default PropCard;
