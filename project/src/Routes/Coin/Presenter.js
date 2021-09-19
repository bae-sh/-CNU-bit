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
const Button = styled.button`
  font-size: 15px;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: ${({ color }) => color};
`;
const changeText = (price) => {
  let textPrice = "";
  for (let i = 1; i <= price.length; i++) {
    textPrice = price[price.length - i] + textPrice;
    if (i % 3 === 0 && i !== price.length) {
      textPrice = "," + textPrice;
    }
  }
  return textPrice;
};

const handlePrompt = (
  current,
  coinPrice,
  coinCode,
  userInfo,
  setUserInfo,
  coinName
) => {
  let text = current === "buy" ? "매수" : "매도";
  let amount = prompt(`${text}수량을 입력하시오.`);
  if (amount === null) {
  } else if (isNaN(amount) || amount <= 0) {
    alert("0보다 큰 숫자만 입력 가능합니다.");
  } else if (amount > 0) {
    current === "buy"
      ? buyCoin(amount, coinPrice, coinCode, userInfo, setUserInfo, coinName)
      : sellCoin(amount, coinPrice, coinCode, userInfo, setUserInfo, coinName);
  }
  return amount;
};

const buyCoin = (
  amount,
  coinPrice,
  coinCode,
  userInfo,
  setUserInfo,
  coinName
) => {
  let curUserInfo = { ...userInfo };
  if (curUserInfo === userInfo) {
    console.log(1);
  } else {
    console.log(2);
  }
  if (coinPrice * amount > curUserInfo["cash"]) {
    alert("현금이 부족합니다.");
  } else {
    curUserInfo["cash"] -= coinPrice * amount;
    curUserInfo["coin"][coinCode]["boughtPrice"] += coinPrice * amount;
    curUserInfo["coin"][coinCode]["quantity"] += Number(amount);
    setUserInfo(curUserInfo);
    alert(`${coinName}을 ${amount}개 매수하였습니다. `);
  }
};
const sellCoin = (
  amount,
  coinPrice,
  coinCode,
  userInfo,
  setUserInfo,
  coinName
) => {
  let curUserInfo = userInfo;
  if (amount > curUserInfo["coin"][coinCode]["quantity"]) {
    alert(
      `${coinName} 보유 수량(${curUserInfo["coin"][coinCode]["quantity"]}개) 보다 많습니다.`
    );
  } else {
    curUserInfo["cash"] += coinPrice * amount;
    curUserInfo["coin"][coinCode]["boughtPrice"] -=
      (curUserInfo["coin"][coinCode]["boughtPrice"] /
        curUserInfo["coin"][coinCode]["quantity"]) *
      amount;
    curUserInfo["coin"][coinCode]["quantity"] -= Number(amount);
    setUserInfo(curUserInfo);
    alert(`${coinName}을 ${amount}개 매도하였습니다. `);
  }
};
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
                <Button
                  color="#F75467"
                  onClick={() => {
                    handlePrompt(
                      "buy",
                      coinPrice,
                      coinCode,
                      userInfo,
                      setUserInfo,
                      coinName
                    );
                  }}
                >
                  매수
                </Button>
              </td>
              <td>
                <Button
                  color="#4386F9"
                  onClick={() => {
                    handlePrompt(
                      "sell",
                      coinPrice,
                      coinCode,
                      userInfo,
                      setUserInfo,
                      coinName
                    );
                  }}
                >
                  매도
                </Button>
              </td>
            </Row>
          );
        })}
      </Table>
    </Main>
  </div>
);
