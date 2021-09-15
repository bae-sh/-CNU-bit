/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";

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
const Button = styled.button`
  font-size: 15px;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: ${({ color }) => color};
`;
function changeText(price) {
  let textPrice = "";
  for (let i = 1; i <= price.length; i++) {
    textPrice = price[price.length - i] + textPrice;
    if (i % 3 === 0 && i !== price.length) {
      textPrice = "," + textPrice;
    }
  }
  return textPrice;
}
export default ({ coinData }) => (
  <div class="inner">
    <Main>
      <h1>코인</h1>
      <hr></hr>

      <h2>My현금 : 100,000,000 원</h2>
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
          console.log(coin);
          const name = coin["korean_name"];
          const rate = coin["signed_change_rate"].toFixed(3);
          const price = String(coin["trade_price"]);
          const change_price = String(coin["change_price"]);
          const high_price = String(coin["high_price"]);
          const low_price = String(coin["low_price"]);
          let textPrice = changeText(price);
          let textChangePrice = changeText(change_price);
          let textChangeHighPrice = changeText(high_price);
          let textChangeLowPrice = changeText(low_price);
          return (
            <Row rate={rate} index={idx}>
              <td>{name}</td>
              <td>{`${textPrice} 원`}</td>
              <td>{`${rate > 0 ? `+` : `-`}${textChangePrice} 원(${
                rate > 0 ? `+` : ``
              }${rate}%)`}</td>
              <td>{`${textChangeHighPrice} 원`}</td>
              <td>{`${textChangeLowPrice} 원`}</td>
              <td>
                <Button color="#F75467">매수</Button>
              </td>
              <td>
                <Button color="#4386F9">매도</Button>
              </td>
            </Row>
          );
        })}
      </Table>
    </Main>
  </div>
);
