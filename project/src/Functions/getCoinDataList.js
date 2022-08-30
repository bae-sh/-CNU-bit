// 현재 코인 실시간 가격을 받아오는 js
// getCoinData 를 api js에서 받아와 작성.
import { useState, useEffect } from "react";
import { getCoinData } from "../api";
const coinList = {};
function getCoinDataList(marketSelection) {
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

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { coinData } = useCoinData();
    if (coinData.code) {
        coinList[coinData.code] = coinData;
    }
    return Object.values(coinList);
}

export default getCoinDataList;
