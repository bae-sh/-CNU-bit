// 회원가입 페이지 담당 js
/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { dbService } from "../../fbase";
import { doc, setDoc } from "firebase/firestore";

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
export default (userObj) => {
    //url 이동을 위한 useHistory
    const history = useHistory();

    //input에서 입력한 아이디와 비밀번호 정보를 담기위한 state
    const [account, setAccount] = useState({
        email: "",
        password: "",
        name: "",
    });

    //input에 입력하면 자동적으로 account state값 변경
    const onChangeAccount = (e) => {
        //...을 이용하여 account의 복사본을 만들고
        //input에 지정한 네임 속성에 해당 value 값을 넣어 오버라이딩!
        //console.log(account)를 찍어보고 입력한 값들이 account에 출력되면 성공!!
        setAccount({
            ...account,
            [e.target.name]: e.target.value,
        });
    };
    const onSubmit = async () => {
        try {
            const { email, password, name } = account;
            const auth = getAuth();
            await createUserWithEmailAndPassword(auth, email, password);
            setUserObjToFbase(email, name);
            history.push("/");
        } catch (error) {
            console.log(error);
        }
    };
    const setUserObjToFbase = async (email, name) => {
        const docRef = doc(dbService, "users", email);
        userObj.email = email;
        userObj.name = name;
        await setDoc(docRef, userObj);
    };
    return (
        <LoginWrap>
            <LoginBox>
                <Logo>CNU bit</Logo>
                <TextField
                    name="email"
                    placeholder={"이메일"}
                    onChange={onChangeAccount}
                ></TextField>
                <TextField
                    name="name"
                    placeholder={"닉네임"}
                    onChange={onChangeAccount}
                ></TextField>
                <TextField
                    name="password"
                    type={"password"}
                    placeholder={"비밀번호"}
                    onChange={onChangeAccount}
                ></TextField>
                <LoginButton color="#F75467" onClick={onSubmit}>
                    회원가입 하기
                </LoginButton>
            </LoginBox>
        </LoginWrap>
    );
};
