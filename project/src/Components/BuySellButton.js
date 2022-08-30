// 매수 매도 버튼을 담당하는 js
/* eslint-disable import/no-anonymous-default-export */
import styled from "styled-components";
import handlePrompt from "../Functions/handlePrompt";
const Button = styled.button`
    font-size: 15px;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: ${({ color }) => color};
`;

// 파라미터로 현재값,코인데이터, 유저 정보 state,유저정보 setSate,버튼을 누른 coinName을 가져옴
// 매수인지 매도인지 종류에 따라 current 가 buy일경우 빨강 아닐경우 파란색 적용
const BuySellButton = (
    current,
    coinPrice,
    coinCode,
    userInfo,
    setUserInfo,
    coinName,
    setCount
) => {
    return (
        <Button
            color={`${current === "buy" ? "#F75467" : "#4386F9"}`}
            onClick={() => {
                handlePrompt(
                    current,
                    coinPrice,
                    coinCode,
                    userInfo,
                    setUserInfo,
                    coinName,
                    setCount
                );
            }}
        >
            {`${current === "buy" ? "매수" : "매도"}`}
        </Button>
    );
};

export default BuySellButton;
