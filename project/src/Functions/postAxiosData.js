// 회원가입 진행중 기존에 id값이 존재하는지 서버에 post를 하여 확인하고 그후 값을 초기화해주는 js

// 출처 https://velog.io/@hoon_dev/%EB%A6%AC%EC%95%A1%ED%8A%B8%EB%A1%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0#%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%84%9C%EB%B2%84-%ED%86%B5%EC%8B%A0%ED%95%98%EC%97%AC-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B0%9B%EA%B3%A0-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0
import axios from "axios";
const postAxiosData = async (account) => {
    const response = await fetch("http://localhost:4000/users");

    if (response.ok) {
        const users = await response.json();
        const user = users.find((user) => user.id === account["id"]);
        if (user) {
            throw new Error("동일한 아이디가 존재합니다 .");
        }
    }
    axios
        .post(`http://localhost:4000/users`, {
            id: account["id"],
            password: account["password"],
            name: account["name"],
            cash: 500000000,
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
        })
        .then(function (response) {
            alert(`${account["name"]}님 환영합니다.`);
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
};
export default postAxiosData;
