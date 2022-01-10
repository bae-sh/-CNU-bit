// My자산 파트를 담당하는 js

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

const Row = styled.tr`
    border-bottom: 1px solid #ededed;
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
const Table = styled.table`
    width: 100%;
    border: 1px solid #ededed;
    & > thead > tr {
        background-color: #f9f9f9;
        & > th {
            padding: 20px;
        }
    }
`;
// 나의 자산을 오브젝트로 정리
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

export default ({ userInfo, setUserInfo, coinData, coinPrices }) => {
    var myAsset = changeText(String(getMyAsset(userInfo, coinData)));
    const myCash = changeText(String(userInfo["cash"]));
    //코인데이트 목록 정리
    const getMyCoin = () => {
        const result = [];
        const myCoin = Object.values(userInfo["coin"]);
        const myCoinCode = Object.keys(userInfo["coin"]);

        coinData.map((coin) => {
            coinPrices[coin["code"]] = coin["trade_price"];
            return "";
        });
        // 코인에 대한 정보를 수집.
        for (let i = 0; i < myCoin.length; i++) {
            const coin = myCoin[i];
            const coinName = coin["name"];
            const coinCode = myCoinCode[i];
            const coinPrice = coinPrices[coinCode];
            const coinQuantity = coin["quantity"];
            const profit = coinPrice * coinQuantity - myCoin[i]["boughtPrice"];
            const boughtAvgPrice = coin["boughtPrice"] / coin["quantity"];
            const rate = ((coinPrice / boughtAvgPrice - 1) * 100).toFixed(3);

            // 수량이 0인경우 continue
            if (coin["quantity"] === 0) continue;
            // result에 모두 담고 한번에 뿌리는 방식
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
