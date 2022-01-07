// 로그인 부분을 담당하는 js

/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import styled from "styled-components";
import { fetchLogin } from "../../Functions/fetchLogin";
import { useHistory } from "react-router-dom";
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

// 출처 https://velog.io/@hoon_dev/%EB%A6%AC%EC%95%A1%ED%8A%B8%EB%A1%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0#%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%84%9C%EB%B2%84-%ED%86%B5%EC%8B%A0%ED%95%98%EC%97%AC-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B0%9B%EA%B3%A0-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0

function Presenter({ userInfo, setUserInfo }) {
    //url 이동을 위한 useHistory
    const history = useHistory();

    //input에서 입력한 아이디와 비밀번호 정보를 담기위한 state
    const [account, setAccount] = useState({
        id: "",
        password: "",
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
    //동기식으로 로그인정보를 통신하여 출력
    const onSubmitAccount = async () => {
        try {
            const user = await fetchLogin(account);
            let curUserInfo = userInfo;
            curUserInfo["id"] = user["id"];
            curUserInfo["password"] = user["password"];
            curUserInfo["cash"] = user["cash"];
            curUserInfo["name"] = user["name"];
            curUserInfo["coin"] = user["coin"];
            //성공하면 해당 user 아이디 패스워드값 셋팅
            setUserInfo(curUserInfo);
            localStorage.setItem("id", curUserInfo["id"]);
            //성공하면 해당 url로 이동(main페이지로)
            history.replace("/");
        } catch (error) {
            //실패하면 throw new Error("") 값 출력
            window.alert(error);
        }
    };
    return (
        <LoginWrap>
            {/* {console.log(userInfo)} */}
            <LoginBox>
                <Logo>CNU bit</Logo>
                <TextField
                    placeholder={"아이디"}
                    id="id"
                    name="id"
                    onChange={onChangeAccount}
                ></TextField>
                <TextField
                    type="password"
                    placeholder={"비밀번호"}
                    id="password"
                    name="password"
                    onChange={onChangeAccount}
                ></TextField>
                <LoginButton color="#3c78c8" onClick={onSubmitAccount}>
                    로그인
                </LoginButton>
                {/* 회원가입 버튼 클릭시 라우터 이동*/}
                <LoginButton
                    color="#8E8E8E"
                    onClick={() => {
                        window.location.href = "/signup";
                    }}
                >
                    회원가입
                </LoginButton>
            </LoginBox>
        </LoginWrap>
    );
}

export default Presenter;
