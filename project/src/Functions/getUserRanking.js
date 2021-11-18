// 유저들의 랭킹을 받아오는 js

import { useEffect, useState } from "react";
import axios from "axios";

const getData = async (setUserRanking) => {
    await axios
        .get(`http://localhost:4000/users`)
        .then(function (response) {
            setUserRanking(getUserData(response.data));
        })
        .catch(function (error) {
            console.log("실패");
        });
};
const getUserRanking = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [userRanking, setUserRanking] = useState([
        { stock: 500000000, name: "bae" },
        { stock: 600000000, name: "bae2" },
        { stock: 700000000, name: "bae3" },
        { stock: 800000000, name: "bae4" },
        { stock: 900000000, name: "bae5" },
    ]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        getData(setUserRanking);
    }, []);
    return userRanking;
};
const getUserData = (datas) => {
    let temp = [];
    datas.map((data) => {
        temp.push({
            stock: data["cash"],
            name: data["name"],
        });
        return "";
    });
    temp = temp.sort((a, b) => {
        return b.stock - a.stock;
    });
    return temp;
};
export default getUserRanking;
