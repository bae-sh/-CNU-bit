const defaultObj = {
    email: "",
    name: "",
    cash: 0,
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
const marketSelection = {
    "KRW-BTC": "비트코인",
    "KRW-ETH": "이더리움",
    "KRW-LTC": "라이트코인",
    "KRW-XRP": "리플",
    "KRW-ETC": "이더리움클래식",
    "KRW-QTUM": "퀀텀",
    "KRW-STEEM": "스팀",
    "KRW-ARDR": "아더",
    "KRW-REP": "어거",
    "KRW-DOGE": "도지코인",
};
const coinPrices = {
    "KRW-BTC": 0,
    "KRW-ETH": 0,
    "KRW-DOGE": 0,
    "KRW-XRP": 0,
    "KRW-LTC": 0,
    "KRW-ETC": 0,
    "KRW-QTUM": 0,
    "KRW-STEEM": 0,
    "KRW-ARDR": 0,
    "KRW-REP": 0,
};
const marketSmallSelection = {
    "KRW-BTC": "비트코인",
    "KRW-ETH": "이더리움",
    "KRW-DOGE": "도지코인",
    "KRW-XRP": "리플",
};
export { defaultObj, marketSelection, coinPrices, marketSmallSelection };
