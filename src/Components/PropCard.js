import React from "react";
import moment from "moment";

const PropCard = (props) => {
  return (
    <div>
      <h2>
        {props.area}
        {props.addressLine1} {props.adreesLine2} {props.city}
      </h2>
      <p>{moment(props.registration_date).format("DD/MM/YYYY")}</p>
    </div>
  );
};

export default PropCard;
