// 메인 홈페이지를 담당하는 js
/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
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
    margin-top: 30px;
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

export default ({ userRanking, coinData }) => {
    return (
        <Main>
            {/* 메인 이미지를 담당하는 컴포넌트 */}
            <MainContainer>
                <MainImg src={homeImg} />
            </MainContainer>

            {/* 코인 데이터를 나타내 주는 컴포넌트 */}
            <DataContainer>
                <div className="inner">
                    {coinData.map((coin, idx) => {
                        const name = coin["korean_name"];
                        const rate = (coin["signed_change_rate"] * 100).toFixed(
                            3
                        );
                        const coinPrice = coin["trade_price"];
                        const change_price = coin["change_price"];
                        // 4개의 데이터를 표현
                        if (idx < 4) {
                            return (
                                <div key={idx}>
                                    <DataBox>
                                        <CoinName
                                            current={Math.sign(rate) >= 0}
                                        >
                                            {name}
                                        </CoinName>
                                        <CoinData
                                            current={Math.sign(rate) >= 0}
                                        >
                                            <span>현재가: </span>
                                            {`${changeText(
                                                String(coinPrice)
                                            )} 원`}{" "}
                                            <span>KRW</span>
                                        </CoinData>
                                        <CoinData
                                            current={Math.sign(rate) >= 0}
                                        >
                                            <span>전일대비: </span>
                                            {rate >= 0 ? "+" : ""}
                                            {rate}%
                                            <span>
                                                {rate >= 0 ? "+" : "-"}
                                                {`${changeText(
                                                    String(change_price)
                                                )}`}
                                                <span>KRW</span>
                                            </span>
                                        </CoinData>
                                    </DataBox>
                                </div>
                            );
                        }
                        return "";
                    })}
                </div>
            </DataContainer>
            {/* 랭킹 부분을 나타내는 컴포넌트 */}
            <div className="inner">
                <NoticeBox>
                    <Ranking userRanking={userRanking} viewIdx={5} />
                </NoticeBox>
            </div>
        </Main>
    );
};
