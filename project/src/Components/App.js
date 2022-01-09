//npx json-server ./data.json --port 4000
//앱의 최상단 으로써 전체 스타일을 주기위해 GlobalStyles를 만들고 Router사용과 Footer를 적용
import React, { useEffect, useState } from "react";
import Router from "./Router";
import GlobalStyles from "./GlobalStyles";
import Footer from "./Footer";
import { authService, dbService } from "../fbase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import defaultObj from "../defaultObj";
const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userObj, setUserObj] = useState(defaultObj);
    const [count, setCount] = useState(0);
    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if (user) {
                setIsLoggedIn(true);
                getUserObj(user);
                console.log(userObj);
            } else {
                setIsLoggedIn(false);
            }
        });
        console.log(444);
    });
    useEffect(() => {
        console.log(1);
        const updateFirestore = async () => {
            //userObj가 변경될때.
            const docRef = doc(dbService, "users", `${userObj.email}`);
            await setDoc(docRef, userObj);
        };
        //mount될때 예외처리
        if (userObj.name !== "") {
            updateFirestore();
        }
    }, [userObj]);
    //isLoggedIn 일 경우만
    const getUserObj = async (user) => {
        if (userObj.email === "") {
            const docRef = doc(dbService, "users", `${user.email}`);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setUserObj(docSnap.data());
            }
        }
    };
    return (
        <div className="App">
            <GlobalStyles />
            <Router
                isLoggedIn={isLoggedIn}
                userObj={userObj}
                setUserObj={setUserObj}
                setCount={setCount}
            />
            <Footer />
        </div>
    );
};

export default App;
