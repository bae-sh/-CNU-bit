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

import getUserRanking from "../Functions/getUserRanking";
import { getUserInfo } from "../Functions/getUserInfo";
// userInfo 는 getUserInfo 함수에서 가져옴
// 유저 정보가 변할떄마다 state값을 변경해야 하므로 setUserInfo도 받아옴
export default ({ isLoggedIn, userObj }) => {
    const { userInfo, setUserInfo } = getUserInfo();
    const userRanking = getUserRanking();
    //  각각의 라우터를 구성하는 부분
    return (
        <Router>
            <Header isLoggedIn={isLoggedIn} />
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
                                userInfo={userObj}
                                setUserInfo={setUserInfo}
                            />
                        )}
                        exact
                    />
                    <Route
                        path="/Signup"
                        render={() => (
                            <Signup
                                userInfo={userObj}
                                setUserInfo={setUserInfo}
                            />
                        )}
                        exact
                    />
                    <Route
                        path="/MyStock"
                        render={() => (
                            <MyStock
                                userInfo={userObj}
                                setUserInfo={setUserInfo}
                            />
                        )}
                        exact
                    />
                    <Route
                        path="/Coin"
                        render={() => (
                            <Coin
                                userInfo={userObj}
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
