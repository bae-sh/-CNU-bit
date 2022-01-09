// presenter에 제공해야하는 데이터를 이 js에서 제공

/* eslint-disable import/no-anonymous-default-export */
import Presenter from "./Presenter";
const userObj = {
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
};
export default () => <Presenter userObj={userObj} />;
