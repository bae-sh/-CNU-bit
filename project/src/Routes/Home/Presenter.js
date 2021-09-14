/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import homeImg from "../../img/main.png";

const Main = styled.div`
  background-color: #f9fafc;
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
  margin-right: 60px;
  width: 100%;
  margin-bottom: 60px;
  & > ul:not(:last-child) {
    border-bottom: 1px solid #a0a0a0;
    padding-bottom: 20px;
  }

  & > ul {
    padding-top: 20px;
    width: 100%;

    & > li {
      color: #595959;
      width: 100%;
      font-size: 15px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      word-wrap: break-word;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      line-height: 1.5;
    }

    & > li:hover {
      font-weight: 600;
    }

    & > li:not(:last-child) {
      margin-bottom: 5px;
    }
  }

  @media only screen and (max-width: 800px) {
    margin-right: 0;
    margin-bottom: 60px;

    & > ul > li {
      @media only screen and (max-width: 800px) {
        font-size: 13px;
      }
    }
  }
`;

const DataBox = styled.div`
  margin-bottom: 30px;
`;

const Dot = styled.span`
  font-size: 15px;
  font-weight: 700;
  margin-right: 5px;
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

const MAX_NOTICE = 4;
const MAX_FILE = 2;

export default ({ notice, file, coinData }) => {
  return (
    <Main>
      <MainContainer>
        <MainImg src={homeImg} />
      </MainContainer>

      <DataContainer>
        <div className="inner">
          {coinData.map((coin, idx) => {
            const name = coin["korean_name"];
            const rate = coin["signed_change_rate"].toFixed(3);
            const price = String(coin["trade_price"]);
            const change_price = String(coin["change_price"]);
            let textPrice = "";
            let textChangePrice = "";
            for (let i = 1; i <= price.length; i++) {
              textPrice = price[price.length - i] + textPrice;
              if (i % 3 === 0 && i !== price.length) {
                textPrice = "," + textPrice;
              }
            }

            for (let i = 1; i <= change_price.length; i++) {
              textChangePrice =
                change_price[change_price.length - i] + textChangePrice;
              if (i % 3 === 0 && i !== change_price.length) {
                textChangePrice = "," + textChangePrice;
              }
            }

            return (
              <div key={idx}>
                <DataBox>
                  <CoinName current={Math.sign(rate) >= 0}>{name}</CoinName>
                  <CoinData current={Math.sign(rate) >= 0}>
                    <text>현재가: </text>
                    {textPrice} <text>KRW</text>
                  </CoinData>
                  <CoinData current={Math.sign(rate) >= 0}>
                    <text>전일대비: </text>
                    {rate >= 0 ? "+" : ""}
                    {rate}%
                    <span>
                      {rate >= 0 ? "+" : "-"}
                      {textChangePrice}
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
          <h3>랭킹</h3>
          <ul>
            {file.map(({ title, link }, idx) => {
              if (idx < MAX_FILE) {
                return (
                  <li key={idx}>
                    <Link to={link}>
                      <Dot>·</Dot>
                      {title}
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
          <ul>
            {notice.map(({ title, link }, idx) => {
              if (idx < MAX_NOTICE) {
                return (
                  <li key={idx}>
                    <Link to={link}>
                      <Dot>·</Dot>
                      {title}
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </NoticeBox>
      </div>
    </Main>
  );
};
