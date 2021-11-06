/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";

import changeText from "../../Functions/changeText";
import BuySellButton from "../../Components/BuySellButton";
const Main = styled.div`
    background-color: #ffffff;
    width: 100%;
    margin: auto;
    flex: 1;
    padding: 100px;

    & > h1 {
        font-size: 40px;
        font-weight: 600;
        margin-bottom: 20px;
    }
    & > h2 {
        font-size: 35px;
        font-weight: 600;
        margin: 40px 50px;
    }
    & > h3 {
        font-size: 30px;
        font-weight: 500;
        margin: 40px 50px;
    }
`;
const Table = styled.table`
    width: 100%;
    border: 1px solid #ededed;
`;

const Row = styled.tr`
    border-bottom: 1px solid #ededed;
    &:first-child {
        background-color: #f9f9f9;
        & > th {
            padding: 20px;
        }
    }
    & > td {
        padding: 15px;
        font-size: 15px;
        text-align: center;
        &:nth-child(5),
        :nth-child(6) {
            color: ${({ rate }) => {
                if (rate > 0) {
                    return "red";
                } else if (rate === 0) {
                    return "black";
                } else {
                    return "blue";
                }
            }};
        }
        &:first-child {
            font-weight: 500;
        }
    }
`;

function getMyAsset(userInfo, coinData) {
    var myAsset = userInfo["cash"];
    coinData.map((coin) => {
        myAsset +=
            coin["trade_price"] *
            userInfo["coin"][`${coin["code"]}`]["quantity"];
        return "";
    });
    return myAsset;
}

export default ({ userInfo, setUserInfo, coinData }) => {
    var myAsset = changeText(String(getMyAsset(userInfo, coinData)));
    const myCash = changeText(String(userInfo["cash"]));

    const getMyCoin = () => {
        const result = [];
        const myCoin = Object.values(userInfo["coin"]);
        const myCoinCode = Object.keys(userInfo["coin"]);
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

        coinData.map((coin) => {
            coinPrices[coin["code"]] = coin["trade_price"];
            return "";
        });

        for (let i = 0; i < myCoin.length; i++) {
            const coin = myCoin[i];
            const coinName = coin["name"];
            const coinCode = myCoinCode[i];
            const coinPrice = coinPrices[coinCode];
            const coinQuantity = coin["quantity"];
            const profit = coinPrice * coinQuantity - myCoin[i]["boughtPrice"];
            const boughtAvgPrice = coin["boughtPrice"] / coin["quantity"];
            const rate = ((coinPrice / boughtAvgPrice - 1) * 100).toFixed(3);

            if (coin["quantity"] === 0) continue;
            result.push(
                <Row rate={rate}>
                    <td>{coinName}</td>
                    <td>{`${changeText(String(coinPrice))} 원`}</td>
                    <td>{`${changeText(
                        String(parseInt(boughtAvgPrice))
                    )} 원`}</td>
                    <td>{`${changeText(String(coin["boughtPrice"]))} 원`}</td>
                    <td>{`${rate >= 0 ? "+" : "-"}${changeText(
                        String(Math.abs(profit))
                    )}원`}</td>
                    <td>{`${String(rate)}%`}</td>
                    <td>{`${coinQuantity}`}</td>
                    <td>
                        {BuySellButton(
                            "buy",
                            coinPrice,
                            coinCode,
                            userInfo,
                            setUserInfo,
                            coinName
                        )}
                    </td>
                    <td>
                        {BuySellButton(
                            "sell",
                            coinPrice,
                            coinCode,
                            userInfo,
                            setUserInfo,
                            coinName
                        )}
                    </td>
                </Row>
            );
        }
        return result;
    };

    return (
        <div className="inner">
            <Main>
                <h1>My자산</h1>
                <hr></hr>
                <h2>My총자산 : {myAsset} 원</h2>
                <h3>My현금 : {myCash}원</h3>
                <Table>
                    <thead>
                        <Row>
                            <th>코인</th>
                            <th>실시간 시세</th>
                            <th>매입가</th>
                            <th>매입총액</th>
                            <th>평가손익</th>
                            <th>수익률</th>
                            <th>수량</th>
                            <th>매수</th>
                            <th>매도</th>
                        </Row>
                    </thead>
                    <tbody>{getMyCoin()}</tbody>
                </Table>
            </Main>
        </div>
    );
};
