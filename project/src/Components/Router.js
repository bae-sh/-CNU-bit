// Router 부분을 담당 Js

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

export default ({ isLoggedIn, userObj, setUserObj, usersData }) => {
    // const userRanking = getUserRanking();
    const userRanking = [];
    //  각각의 라우터를 구성하는 부분
    return (
        <Router>
            <Header isLoggedIn={isLoggedIn} setUserObj={setUserObj} />
            <main>
                <Switch>
                    <Route
                        path="/"
                        render={() => <Home usersData={usersData} />}
                        exact
                    />
                    <Route
                        path="/Login"
                        render={() => (
                            <Login
                                userInfo={userObj}
                                setUserInfo={setUserObj}
                            />
                        )}
                        exact
                    />
                    <Route
                        path="/Signup"
                        render={() => (
                            <Signup
                                userInfo={userObj}
                                setUserInfo={setUserObj}
                            />
                        )}
                        exact
                    />
                    <Route
                        path="/MyStock"
                        render={() => (
                            <MyStock
                                userInfo={userObj}
                                setUserInfo={setUserObj}
                            />
                        )}
                        exact
                    />
                    <Route
                        path="/Coin"
                        render={() => (
                            <Coin userInfo={userObj} setUserInfo={setUserObj} />
                        )}
                        exact
                    />
                    <Route
                        path="/Ranking"
                        render={() => (
                            <Ranking
                                userRanking={userRanking}
                                usersData={usersData}
                            />
                        )}
                        exact
                    />
                    <Route path="/Menual" render={() => <Menual />} exact />
                    <Redirect to="/" />
                </Switch>
            </main>
        </Router>
    );
};
