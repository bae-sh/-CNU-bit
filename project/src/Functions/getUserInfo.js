/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState, useEffect } from "react";
const getUserInfo = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        let id = localStorage.getItem("id");

        if (id !== null) {
            let curUserInfo = userInfo;
            axios
                .get(`http://localhost:4000/users/${id}`)
                .then(function (response) {
                    curUserInfo = response.data;
                    setUserInfo(curUserInfo);
                })
                .catch(function (error) {
                    console.log("실패");
                });
        }
    }, []);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [userInfo, setUserInfo] = useState({
        id: "",
        password: "",
        name: "",
        cash: 0,
        coin: {
            "KRW-BTC": {
                name: "비트코인",
                boughtPrice: 40000000,
                quantity: 0,
            },
            "KRW-ETH": {
                name: "이더리움",
                boughtPrice: 1231230,
                quantity: 0,
            },
            "KRW-DOGE": {
                name: "도지코인",
                boughtPrice: 123123,
                quantity: 0,
            },
            "KRW-XRP": {
                name: "리플",
                boughtPrice: 123123,
                quantity: 0,
            },
            "KRW-LTC": {
                name: "라이트코인",
                boughtPrice: 123123,
                quantity: 0,
            },
            "KRW-ETC": {
                name: "이더리움클래식",
                boughtPrice: 123123,
                quantity: 0,
            },
            "KRW-QTUM": {
                name: "퀀텀",
                boughtPrice: 123123,
                quantity: 0,
            },
            "KRW-STEEM": {
                name: "스팀",
                boughtPrice: 123123,
                quantity: 0,
            },
            "KRW-ARDR": {
                name: "아더",
                boughtPrice: 123123,
                quantity: 0,
            },
            "KRW-REP": {
                name: "어거",
                boughtPrice: 123123,
                quantity: 0,
            },
        },
    });
    return { userInfo, setUserInfo };
};

export default getUserInfo;
