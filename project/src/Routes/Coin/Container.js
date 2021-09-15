/* eslint-disable import/no-anonymous-default-export */
import Presenter from "./Presenter";
import React, { useState, useEffect } from "react";
import { getCoinData } from "../../api";
// acc_ask_volume: 1589.80232733;
// acc_bid_volume: 1490.90662163;
// acc_trade_price: 169190700549.47552;
// acc_trade_price_24h: 212754320362.93954;
// acc_trade_volume: 3080.70894896;
// acc_trade_volume_24h: 3872.79851367;
// ask_bid: "BID";
// change: "RISE";
// change_price: 524000; 전일대비 가격
// change_rate: 0.0095620438; 전일대비 비율
// code: "KRW-BTC";
// delisting_date: null;
// high_price: 55580000; 고가
// highest_52_week_date: "2021-04-14";
// highest_52_week_price: 81994000;
// is_trading_suspended: false;
// korean_name: "비트코인";
// low_price: 54316000; 저가
// lowest_52_week_date: "2020-09-24";
// lowest_52_week_price: 11912000;
// market_state: "ACTIVE";
// market_state_for_ios: null;
// market_warning: "NONE";
// opening_price: 54800000;
// prev_closing_price: 54800000;
// signed_change_price: 524000;
// signed_change_rate: 0.0095620438;
// stream_type: "REALTIME";
// timestamp: 1631457739967;
// trade_date: "20210912";
// trade_price: 55324000;
// trade_status: null;
// trade_time: "144219";
// trade_timestamp: 1631457739000;
// trade_volume: 0.00492042;

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

export default () => {
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

    console.log(coinData);
  }
  return <Presenter coinData={Object.values(coinList)} />;
};
