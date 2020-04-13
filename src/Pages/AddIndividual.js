import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AddIndividual = () => {
  const [aadharNumber, changeAadharNum] = useState(0);
  const [first_name, changefirst_name] = useState("");
  const [last_name, changelast_name] = useState("");
  const [father_name, changefather_name] = useState("");
  const [pancard_no, changepancard_no] = useState("");
  const [postalCode, changepostalCode] = useState("");
  const [addressLine1, changeaddressLine1] = useState("");
  const [adreessLine2, changeadreessLine2] = useState("");
  const [city, changecity] = useState("");
  const [distict, changedistict] = useState("");
  const [state, changestate] = useState("");
  const [gender, changegender] = useState("");
  const [bankBal, changebankBal] = useState(0);
  const [mode, changemode] = useState("");
  const [bidAmount, changebidAmount] = useState(0);
  const [isSubmitting, changeSubmitting] = useState(false);

  const onFormSubmit = (e) => {
    e.preventDefault();
    changeSubmitting(true);
    const payload = {
      $class: "org.landregv0.Individual",
      aadharNumber,
      first_name,
      last_name,
      father_name,
      pancard_no,
      address: {
        $class: "org.landregv0.IndianAddress",
        postalCode,
        addressLine1,
        adreessLine2,
        city,
        distict,
        state,
      },
      gender,
      bankBal,
      mode,
      status: "DEFAULT",
      bidAmount,
    };
    var data = JSON.stringify(payload);
    console.log(data);
    axios
      .post("http://localhost:3000/api/Individual", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        changeSubmitting(true);
        console.log("Submitted!")
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Add Individual Page</h1>
      <Link to="/addProperty">Add Prop</Link>
      <form onSubmit={onFormSubmit}>
        <label>Aadhar Number</label>
        <input
          type="number"
          value={aadharNumber}
          onChange={(e) => changeAadharNum(e.target.value)}
        /> 
        <br />
        <label>First Name</label>
        <input
          value={first_name}
          onChange={(e) => changefirst_name(e.target.value)}
        /> 
        <br />
        <label>Last Name</label>
        <input
          value={last_name}
          onChange={(e) => changelast_name(e.target.value)}
        /> 
        <br />
        <label>Father Name</label>
        <input
          value={father_name}
          onChange={(e) => changefather_name(e.target.value)}
        /> 
        <br />
        <label>PAN Card No</label>
        <input
          value={pancard_no}
          onChange={(e) => changepancard_no(e.target.value)}
        /> 
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
        <input
          value={state}
          onChange={(e) => changestate(e.target.value)}
        /> 
        <br />
        <label>Gender</label>
        <input
          value={gender}
          onChange={(e) => changegender(e.target.value)}
        /> 
        <br />
        <label>Bank Balance</label>
        <input
          value={bankBal}
          onChange={(e) => changebankBal(e.target.value)}
        /> 
        <br />
        <label>Mode</label>
        <input value={mode} onChange={(e) => changemode(e.target.value)} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddIndividual;
