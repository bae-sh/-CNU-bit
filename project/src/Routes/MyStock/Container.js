/* eslint-disable import/no-anonymous-default-export */
import Presenter from "./Presenter";
import React, { useState, useEffect } from "react";
import { getCoinData } from "../../api";
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
const coinList = {};
export default ({ userInfo, setUserInfo }) => {
  const useCoinData = () => {
    const [coinData, setCoinData] = useState({});
    const getData = async () => {
      try {
        await getCoinData(marketSelection, setCoinData);
      } catch (e) {
        console.log("실패");
      }
    };
    useEffect(() => {
      getData();
    }, []);
    return {
      coinData,
    };
  };

  const { coinData } = useCoinData();

  if (coinData.code) {
    coinList[coinData.code] = coinData;
  }
  return (
    <Presenter
      userInfo={userInfo}
      setUserInfo={setUserInfo}
      coinData={Object.values(coinList)}
    />
  );
};
