// 로그인 부분을 담당하는 js

/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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
    width: 100%;
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
    max-width: 350px;
    padding-bottom: 70px;
`;
const ErrorMessage = styled.p`
    color: #ff0000;
`;
const Presenter = () => {
    //url 이동을 위한 useHistory
    const history = useHistory();

    //input에서 입력한 아이디와 비밀번호 정보를 담기위한 state
    const [account, setAccount] = useState({
        email: "",
        password: "",
    });
    const [message, setMessage] = useState("");
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
    //동기식으로 로그인정보를 통신하여 출력
    const onSubmitAccount = async () => {
        const { email, password } = account;
        try {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    // const user = userCredential.user;
                    history.push("/");
                })
                .catch((error) => {
                    if (error.code === "auth/invalid-email") {
                        setMessage("이메일 형식이 올바르지 않습니다.");
                    } else if (error.code === "auth/internal-error") {
                        setMessage("정보를 모두 입력해 주세요.");
                    } else if (error.code === "auth/wrong-password") {
                        setMessage("비밀번호가 올바르지 않습니다.");
                    } else if (error.code === "auth/user-not-found") {
                        setMessage("존재하지 않는 이메일 입니다.");
                    }
                });
        } catch (error) {
            //실패하면 throw new Error("") 값 출력
            window.alert(error);
        }
    };
    return (
        <LoginWrap>
            <LoginBox>
                <Logo>CNU bit</Logo>
                <TextField
                    placeholder={"이메일"}
                    email="email"
                    name="email"
                    onChange={onChangeAccount}
                ></TextField>
                <TextField
                    type="password"
                    placeholder={"비밀번호"}
                    id="password"
                    name="password"
                    onChange={onChangeAccount}
                ></TextField>
                <ErrorMessage>{message}</ErrorMessage>
                <LoginButton color="#3c78c8" onClick={onSubmitAccount}>
                    로그인
                </LoginButton>
                {/* 회원가입 버튼 클릭시 라우터 이동*/}
                <LoginButton
                    color="#8E8E8E"
                    onClick={() => {
                        history.push("/signup");
                    }}
                >
                    회원가입
                </LoginButton>
            </LoginBox>
        </LoginWrap>
    );
};

export default Presenter;
