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
function getMyAsset(userInfo, coinData) {
  var myAsset = 0;
  {
    coinData.map((coin) => {
      myAsset +=
        coin["trade_price"] * userInfo["coin"][`${coin["code"]}`]["quantity"];
    });
  }
  return myAsset;
}
export default ({ userInfo, setUserInfo, coinData }) => {
  var myAsset = changeText(String(getMyAsset(userInfo, coinData)));
  const myCash = changeText(String(userInfo.cash));
  const getMyCoin = () => {
    const result = [];
    const myCoin = Object.values(userInfo["coin"]);
    const coinPrice = [];
    {
      coinData.map((coin) => {
        coinPrice.push(coin["trade_price"]);
      });
    }
    for (let i = 0; i < myCoin.length; i++) {
      const coin = myCoin[i];

      if (coin["quantity"] === 0) continue;

      const profit = coinPrice[i] - myCoin[i]["boughtPrice"];
      const rate = (
        (coinPrice[i] - myCoin[i]["boughtPrice"]) /
        coin["boughtPrice"]
      ).toFixed(3);
      result.push(
        <Row>
          <td>{coin["name"]}</td>
          <td>{`${changeText(String(coinPrice[i]))} 원`}</td>
          <td>{`${changeText(String(coin["boughtPrice"]))} 원`}</td>
          <td>{`${rate >= 0 ? "+" : "-"}${changeText(
            String(Math.abs(profit))
          )}원`}</td>
          <td>{`${String(rate)}%`}</td>
          <td>{`${coin["quantity"]}`}</td>
          <td>
            <Button color="#F75467">매수</Button>
          </td>
          <td>
            <Button color="#4386F9">매도</Button>
          </td>
        </Row>
      );
    }
    return result;
  };
  return (
    <div class="inner">
      <Main>
        <h1>My자산</h1>
        <hr></hr>
        <h2>My총자산 : {myAsset} 원</h2>
        <h3>My현금 : {myCash}원</h3>
        <Table>
          <Row>
            <th>코인</th>
            <th>실시간 시세</th>
            <th>매입가</th>
            <th>평가손익</th>
            <th>수익률</th>
            <th>수량</th>
            <th>매수</th>
            <th>매도</th>
          </Row>
          {getMyCoin()}
        </Table>
      </Main>
    </div>
  );
};
