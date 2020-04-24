import React, { useEffect } from "react";
import { Route } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <Route
        component={() => {
          window.location.href =
            "https://determined-keller-3cf520.netlify.app/";
          return null;
        }}
      />
    </div>
  );
};

export default Landing;
