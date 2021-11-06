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
import Signup from "../Routes/Signup";

import getUserRanking from "../Functions/getUserRanking";
import getUserInfo from "../Functions/getUserInfo";

export default () => {
    const userInfo = getUserInfo().userInfo;
    const setUserInfo = getUserInfo().setUserInfo;
    const userRanking = getUserRanking();
    return (
        <Router>
            <Header userInfo={userInfo} />
            <main>
                <Switch>
                    <Route
                        path="/"
                        render={() => <Home userRanking={userRanking} />}
                        exact
                    />
                    <Route
                        path="/Login"
                        render={() => (
                            <Login
                                userInfo={userInfo}
                                setUserInfo={setUserInfo}
                            />
                        )}
                        exact
                    />
                    <Route
                        path="/Signup"
                        render={() => (
                            <Signup
                                userInfo={userInfo}
                                setUserInfo={setUserInfo}
                            />
                        )}
                        exact
                    />
                    <Route
                        path="/MyStock"
                        render={() => (
                            <MyStock
                                userInfo={userInfo}
                                setUserInfo={setUserInfo}
                            />
                        )}
                        exact
                    />
                    <Route
                        path="/Coin"
                        render={() => (
                            <Coin
                                userInfo={userInfo}
                                setUserInfo={setUserInfo}
                            />
                        )}
                        exact
                    />
                    <Route
                        path="/Ranking"
                        render={() => <Ranking userRanking={userRanking} />}
                        exact
                    />
                    <Route path="/Menual" render={() => <Menual />} exact />
                    <Redirect to="/" />
                </Switch>
            </main>
        </Router>
    );
};
