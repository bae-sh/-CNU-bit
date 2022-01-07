// json server에서 유저의 정보를 받아오는 담당 js

/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState, useEffect } from "react";
const useGetUserInfo = () => {
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
    useEffect(() => {
        let id = localStorage.getItem("id");
        // id값이 존재하는경우 서버에서 정보를 받아옴
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
    // 기본적인 default 값 초기화

    return { userInfo, setUserInfo };
};

export const getUserInfo = useGetUserInfo;
