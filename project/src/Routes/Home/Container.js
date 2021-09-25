/* eslint-disable import/no-anonymous-default-export */
import Presenter from "./Presenter";
import React, { useEffect } from "react";
import getCoinDataList from "../../Functions/getCoinDataList";

const marketSelection = {
  "KRW-BTC": "비트코인",
  "KRW-ETH": "이더리움",
  "KRW-DOGE": "도지코인",
  "KRW-XRP": "리플",
};

export default ({ userRanking }) => {
  const coinList = getCoinDataList(marketSelection);
  return <Presenter coinData={coinList} userRanking={userRanking} />;
};
