import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import localstorage from "local-storage";

const User = () => {
  if (localstorage.getItem(user)) history.push("/");
  const [user, setUser] = useContext("");
  const history = useHistory();

  return (
    <div>
      <h1>User</h1>
    </div>
  );
};

export default User;
