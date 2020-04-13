import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AddIndividual from "./Pages/AddIndividual";
import AddProperty from "./Pages/AddProperty";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import User from './Pages/User'
import Registrar from './Pages/Registrar'
import Property from './Pages/Property'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/addIndividual" component={AddIndividual} exact />
        <Route path="/addProperty" component={AddProperty} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={SignUp} exact />
        <Route path="/user/:id" component={User} exact />
        <Route path="/registrar" component={Registrar} exact />
        <Route path="/property/:id" component={Property} exact />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
