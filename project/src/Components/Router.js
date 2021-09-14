/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Header from "./Header";
import MyStock from "../Routes/MyStock";
import Coin from "../Routes/Coin";
import Home from "../Routes/Home";
import Menual from "../Routes/Menual";
import Login from "../Routes/Login";
import Ranking from "../Routes/Ranking";

export default () => (
  <Router>
    <Header />
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Login" component={Login} exact />
        <Route path="/MyStock" component={MyStock} exact />
        <Route path="/Coin" component={Coin} exact />
        <Route path="/Menual" component={Menual} exact />
        <Route path="/Ranking" component={Ranking} exact />
        <Redirect to="/" />
      </Switch>
    </main>
  </Router>
);
