/* eslint-disable import/no-anonymous-default-export */
import Presenter from "./Presenter";
import React from "react";
import getCoinDataList from "../../Functions/getCoinDataList";

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

export default ({ userInfo, setUserInfo }) => {
  const coinList = getCoinDataList(marketSelection);
  return (
    <Presenter
      userInfo={userInfo}
      setUserInfo={setUserInfo}
      coinData={coinList}
    />
  );
};
