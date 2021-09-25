/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";

import homeImg from "../../img/main.png";

import changeText from "../../Functions/changeText";
import Ranking from "../../Components/Ranking";
const Main = styled.div`
  background-color: #fff;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #e9eae9;
`;

const MainImg = styled.img`
  width: 100%;
  max-width: 1000px;
  height: 500px;
  object-fit: cover;
  object-position: center;
  @media only screen and (max-width: 800px) {
    height: 400px;
  }
`;

const DataContainer = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 50px 0;
  & > .inner {
    display: flex;
    flex-wrap: wrap;
    & > div {
      background-color: #feffff;
      width: 450px;
      box-shadow: 0px 5px 15px -5px #000;
      padding: 40px;
      margin: 30px auto;
    }
  }

  @media only screen and (max-width: 800px) {
    & > .inner {
      flex-direction: column;
      align-items: center;

      & > div {
        max-width: 500px;
        padding: 30px 20px;

        & > h3 {
          font-size: 16px;
        }
      }
    }
  }
`;

const NoticeBox = styled.div`
  margin: auto;
  width: 90%;
  margin-bottom: 60px;
  box-shadow: 0px 5px 15px -5px #000;
  & > h3 {
    font-size: 30px;
  }
  @media only screen and (max-width: 800px) {
    margin-right: 0;
    margin-bottom: 60px;
  }
`;

const DataBox = styled.div`
  margin-bottom: 30px;
`;

const CoinName = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
`;
const CoinData = styled.div`
  font-size: 25px;
  font-weight: 450;
  color: ${({ current }) => (current ? "#d60000" : "#0062df")};
  margin: 30px 0;
  & > text {
    //KRW

    font-size: 20px;
  }
  & > text:first-child {
    color: black;
  }
  & > span {
    margin-left: 14px;
    & > text {
      font-size: 20px;
      margin-left: 5px;
    }
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
    font-size: 17px;
    text-align: center;
    vertical-align: middle;
  }
`;

export default ({ userRanking, coinData }) => {
  return (
    <Main>
      <MainContainer>
        <MainImg src={homeImg} />
      </MainContainer>

      <DataContainer>
        <div className="inner">
          {coinData.map((coin, idx) => {
            const name = coin["korean_name"];
            const rate = (coin["signed_change_rate"] * 100).toFixed(3);
            const coinPrice = coin["trade_price"];
            const change_price = coin["change_price"];

            return (
              <div key={idx}>
                <DataBox>
                  <CoinName current={Math.sign(rate) >= 0}>{name}</CoinName>
                  <CoinData current={Math.sign(rate) >= 0}>
                    <text>현재가: </text>
                    {`${changeText(String(coinPrice))} 원`} <text>KRW</text>
                  </CoinData>
                  <CoinData current={Math.sign(rate) >= 0}>
                    <text>전일대비: </text>
                    {rate >= 0 ? "+" : ""}
                    {rate}%
                    <span>
                      {rate >= 0 ? "+" : "-"}
                      {`${changeText(String(change_price))}`}
                      <text>KRW</text>
                    </span>
                  </CoinData>
                </DataBox>
              </div>
            );
          })}
        </div>
      </DataContainer>

      <div className="inner">
        <NoticeBox>
          <Ranking userRanking={userRanking} viewIdx={5} />
        </NoticeBox>
      </div>
    </Main>
  );
};
