//npx json-server ./data.json --port 4000
//앱의 최상단 으로써 전체 스타일을 주기위해 GlobalStyles를 만들고 Router사용과 Footer를 적용
import React, { useEffect, useState } from "react";
import Router from "./Router";
import GlobalStyles from "./GlobalStyles";
import Footer from "./Footer";
import { authService, dbService } from "../fbase";
import { doc, setDoc, getDoc } from "firebase/firestore";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userObj, setUserObj] = useState({
        email: "",
        name: "",
        cach: "500000000",
        coin: {
            "KRW-BTC": {
                name: "비트코인",
                boughtPrice: 0,
                quantity: 0,
            },
            "KRW-ETH": {
                name: "이더리움",
                boughtPrice: 0,
                quantity: 0,
            },
            "KRW-DOGE": {
                name: "도지코인",
                boughtPrice: 0,
                quantity: 0,
            },
            "KRW-XRP": {
                name: "리플",
                boughtPrice: 0,
                quantity: 0,
            },
            "KRW-LTC": {
                name: "라이트코인",
                boughtPrice: 0,
                quantity: 0,
            },
            "KRW-ETC": {
                name: "이더리움클래식",
                boughtPrice: 0,
                quantity: 0,
            },
            "KRW-QTUM": {
                name: "퀀텀",
                boughtPrice: 0,
                quantity: 0,
            },
            "KRW-STEEM": {
                name: "스팀",
                boughtPrice: 0,
                quantity: 0,
            },
            "KRW-ARDR": {
                name: "아더",
                boughtPrice: 0,
                quantity: 0,
            },
            "KRW-REP": {
                name: "어거",
                boughtPrice: 0,
                quantity: 0,
            },
        },
    });

    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if (user) {
                setIsLoggedIn(true);
                setUserObj({ ...userObj, email: `${user.email}` });
            } else {
                setIsLoggedIn(false);
            }
        });
    });
    useEffect(() => {
        const fire = async (user) => {
            console.log(user);
            const docRef = doc(dbService, "users", `${user.email}`);
            const docSnap = await getDoc(docRef);
            if (!docSnap.exists()) {
                await setDoc(docRef, userObj);
            } else {
                setUserObj(docSnap.data());
            }

            console.log(docSnap.data());
        };
        fire(user);
    }, [isLoggedIn]);
    useEffect(() => {
        const updateFirestore = async () => {
            console.log(userObj);
            const docRef = doc(dbService, "users", `${userObj.email}`);
            await setDoc(docRef, userObj);
        };
        updateFirestore();
    }, [userObj]);
    return (
        <div className="App">
            <GlobalStyles />
            <Router
                isLoggedIn={isLoggedIn}
                userObj={userObj}
                setIsLoggedIn={setIsLoggedIn}
            />
            <Footer />
        </div>
    );
};

export default App;
