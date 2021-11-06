/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";

const Logo = styled.div`
    font-size: 70px;
    font-family: "Arimo", sans-serif;
    font-weight: 900;
    font-style: italic;
    color: #3c78c8;
    margin-bottom: 30px;
    @media only screen and (max-width: 800px) {
        font-size: 50px;
    }
`;
const TextField = styled.input`
    margin-bottom: 10px;
    border: 1px solid lightgray;
    font-size: 15px;
    padding: 10px 15px;
    width: 90%;
    height: 50px;
    outline: 0;

    &:focus {
        border: 1.5px solid #0062df;
    }

    @media only screen and (max-width: 800px) {
        height: 45px;
    }
`;

const LoginButton = styled.button`
    background-color: ${({ color }) => color};
    font-size: 15px;
    padding: 12px 50px;
    color: white;
    justify-content: center;
    font-size: 18px;
    margin: 8px 0;
    width: 100%;
    border-radius: 10px;
    @media only screen and (max-width: 800px) {
        font-size: 15px;
    }
`;
const LoginWrap = styled.div`
    min-height: calc(100vh - 190px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
`;

const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;
    padding-bottom: 70px;
`;

export default () => (
    <LoginWrap>
        <LoginBox>
            <Logo>CNU bit</Logo>
            <TextField placeholder={"아이디"}></TextField>
            <TextField placeholder={"닉네임"}></TextField>
            <TextField type={"password"} placeholder={"비밀번호"}></TextField>
            <LoginButton color="#F75467">회원가기 하기</LoginButton>
        </LoginBox>
    </LoginWrap>
);
