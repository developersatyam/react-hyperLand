import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AddIndividual from "./Pages/AddIndividual";
import AddProperty from "./Pages/AddProperty";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import User from "./Pages/User";
import Registrar from "./Pages/Registrar";
import Property from "./Pages/Property";
import AddRegistrar from "./Pages/AddRegistrar";
import Admin from "./Pages/Admin";
import RegLogin from "./Pages/RegLogin";

import { reactLocalStorage } from "reactjs-localstorage";
reactLocalStorage.setObject("CookieUser", null);

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/admin" component={Admin} exact />
        <Route path="/addIndividual" component={AddIndividual} exact />
        <Route path="/addProperty" component={AddProperty} exact />
        <Route path="/addRegistrar" component={AddRegistrar} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/regLogin" component={RegLogin} exact />
        <Route path="/user/:id" component={User} exact />
        <Route path="/registrar/:rId" component={Registrar} exact />
        <Route path="/registrar" component={RegLogin} exact />
        <Route path="/property/:id" component={Property} exact />
        <Route path="/" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
