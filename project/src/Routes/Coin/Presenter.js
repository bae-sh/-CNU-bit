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
    padding: 20px;
    text-align: center;
    &:nth-child(2),
    :nth-child(3) {
      color: ${({ rate }) => {
        if (rate > 0) {
          return "red";
        } else if (rate == 0) {
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

export default ({ userInfo, setUserInfo, coinData }) => (
  <div class="inner">
    <Main>
      <h1>코인</h1>
      <hr></hr>
      <h2>{`My현금 : ${changeText(String(userInfo["cash"]))} 원`}</h2>
      <Table>
        <Row>
          <th>코인</th>
          <th>실시간 시세</th>
          <th>변동률</th>
          <th>고가</th>
          <th>저가</th>
          <th>매수</th>
          <th>매도</th>
        </Row>
        {coinData.map((coin, idx) => {
          const coinName = coin["korean_name"];
          const rate = coin["signed_change_rate"].toFixed(3);
          const coinPrice = coin["trade_price"];
          const coinCode = coin["code"];
          return (
            <Row rate={rate} index={idx}>
              <td>{coinName}</td>
              <td>{`${changeText(String(coinPrice))} 원`}</td>
              <td>{`${rate >= 0 ? `+` : `-`}${changeText(
                String(coin["change_price"])
              )} 원(${rate > 0 ? `+` : ``}${rate}%)`}</td>
              <td>{`${changeText(String(coin["high_price"]))} 원`}</td>
              <td>{`${changeText(String(coin["low_price"]))} 원`}</td>
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
        })}
      </Table>
    </Main>
  </div>
);
