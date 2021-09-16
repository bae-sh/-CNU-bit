/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from "react";
import { getCoinData } from "../api";
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

export default () => {
  const [userInfo, setUserInfo] = useState({
    id: "bae",
    cash: 100000000,
    coin: {
      "KRW-BTC": { name: "비트코인", boughtPrice: 50000000, quantity: 10 },
      "KRW-ETH": { name: "이더리움", boughtPrice: 1231230, quantity: 2 },
      "KRW-DOGE": { name: "도지코인", boughtPrice: 123123, quantity: 2 },
      "KRW-XRP": { name: "리플", boughtPrice: 123123, quantity: 3 },
      "KRW-LTC": { name: "라이트코인", boughtPrice: 123123, quantity: 4 },
      "KRW-ETC": { name: "이더리움클래식", boughtPrice: 123123, quantity: 0 },
      "KRW-QTUM": { name: "퀀텀", boughtPrice: 123123, quantity: 0 },
      "KRW-STEEM": { name: "스팀", boughtPrice: 123123, quantity: 0 },
      "KRW-ARDR": { name: "아더", boughtPrice: 123123, quantity: 1 },
      "KRW-REP": { name: "어거", boughtPrice: 123123, quantity: 0 },
    },
  });
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/" render={() => <Home />} exact />
          <Route
            path="/Login"
            render={() => (
              <Login userInfo={userInfo} setUserInfo={setUserInfo} />
            )}
            exact
          />
          <Route
            path="/MyStock"
            render={() => (
              <MyStock userInfo={userInfo} setUserInfo={setUserInfo} />
            )}
            exact
          />
          <Route
            path="/Coin"
            render={() => (
              <Coin userInfo={userInfo} setUserInfo={setUserInfo} />
            )}
            exact
          />
          <Route path="/Menual" render={() => <Menual />} exact />
          <Route path="/Ranking" redner={() => <Ranking />} exact />
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};
