import { useState } from "react";
const getUserInfo = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [userInfo, setUserInfo] = useState({
    id: "bae",
    cash: 500000000,
    coin: {
      "KRW-BTC": { name: "비트코인", boughtPrice: 40000000, quantity: 1 },
      "KRW-ETH": { name: "이더리움", boughtPrice: 1231230, quantity: 2 },
      "KRW-DOGE": { name: "도지코인", boughtPrice: 123123, quantity: 2 },
      "KRW-XRP": { name: "리플", boughtPrice: 123123, quantity: 3 },
      "KRW-LTC": { name: "라이트코인", boughtPrice: 123123, quantity: 4 },
      "KRW-ETC": { name: "이더리움클래식", boughtPrice: 123123, quantity: 0 },
      "KRW-QTUM": { name: "퀀텀", boughtPrice: 123123, quantity: 0 },
      "KRW-STEEM": { name: "스팀", boughtPrice: 123123, quantity: 0 },
      "KRW-ARDR": { name: "아더", boughtPrice: 123123, quantity: 1 },
      "KRW-REP": { name: "어거", boughtPrice: 123123, quantity: 0 },
    },
  });
  return { userInfo, setUserInfo };
};

export default getUserInfo;
