import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
var moment = require('moment');

const AddProperty = () => {
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

  const onFormSubmit = (e) => {
    e.preventDefault();
    changeSubmitting(true);
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
        state,
      },
      area,
      forSale,
      marketValue,
      property_type,
      registration_date: moment(),
      owner: `resource:org.landregv0.Individual#${owner}`,
    };
    var data = JSON.stringify(payload);
    axios
      .post("http://localhost:3000/api/LandTitle", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        changeSubmitting(true);
        console.log("Submitted!");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Add Property Page</h1>
      <Link to="/addProperty">Add Prop</Link>
      <form onSubmit={onFormSubmit}>
        <label>ID</label>
        <input
          type="number"
          value={id}
          onChange={(e) => changeId(e.target.value)}
        />
        <br />
        <label>Plot No</label>
        <input value={plotNo} onChange={(e) => changeplotNo(e.target.value)} />
        <br />
        <label>Postal Code</label>
        <input
          value={postalCode}
          onChange={(e) => changepostalCode(e.target.value)}
        />
        <br />
        <label>Address Line 1</label>
        <input
          value={addressLine1}
          onChange={(e) => changeaddressLine1(e.target.value)}
        />
        <br />
        <label>Address Line 2</label>
        <input
          value={adreessLine2}
          onChange={(e) => changeadreessLine2(e.target.value)}
        />
        <br />

        <label>City</label>
        <input value={city} onChange={(e) => changecity(e.target.value)} />
        <br />
        <label>District</label>
        <input
          value={distict}
          onChange={(e) => changedistict(e.target.value)}
        />
        <br />
        <label>State</label>
        <input value={state} onChange={(e) => changestate(e.target.value)} />
        <br />
        <label>Area (in sq. meters)</label>
        <input value={area} onChange={(e) => changearea(e.target.value)} />
        <br />
        <label>For Sale</label>
        <input
          value={forSale}
          onChange={(e) => changeforSale(e.target.value)}
        />
        <br />
        <label>Market value</label>
        <input
          value={marketValue}
          onChange={(e) => changemarketValue(e.target.value)}
        />
        <br />

        <label>Property Type</label>
        <input
          value={property_type}
          onChange={(e) => changeproperty_type(e.target.value)}
        />
        <br />
        <label>Owner (Aadhar Number)</label>
        <input value={owner} onChange={(e) => changeowner(e.target.value)} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddProperty;
