// 헤더 부분을 담당 하는 js
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getAuth, signOut } from "firebase/auth";
import { defaultObj } from "../defaultObj";
// navList 종류에는 4가지가 존재
const navList = [
    { path: "/MyStock", pathName: "myStock", name: "My자산" },
    { path: "/Coin", pathName: "coin", name: "코인" },
    { path: "/Ranking", pathName: "menual", name: "랭킹" },
    { path: "/Menual", pathName: "menual", name: "이용안내" },
];
// 최상위 컴포넌트 Header
const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 70px;
    background-color: #fff;
    box-shadow: 0 0 10px -5px #303030;
    z-index: 1000; //z축 순서 스크롤해도 최상위 유지

    @media only screen and (max-width: 900px) {
        width: 900px;
    }
`;
// 최상위 아래에 자식들을 flex주기위한 컴포넌트
const FlexBox = styled.div`
    display: flex;
    align-items: center;
`;
// CNU bit 로고 컴포넌트
const Logo = styled.div`
    font-size: 35px;
    font-family: "Arimo", sans-serif;
    font-weight: 900;
    font-style: italic;
    width: 150px;
    color: #3c78c8;
`;
// Global navigation bar로써 로고와 다른 div를 주었음
const Gnb = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;
// Gnb 아래의 자식들을 담기위한 그룹
const NavGroup = styled.div`
    display: flex;
    align-items: center;
    margin-left: 40px;
    margin-right: 35%;
    @media only screen and (max-width: 1200px) {
        margin-right: 0;
    }
    /* @media only screen and (max-width: 1200px) {
        margin-right: 30%;
    } */
`;
//  각각의 네비링크에 대한 컴포넌트
const NavLink = styled.div`
    margin-left: 40px;
    font-weight: 800;
    font-size: 18px;

    &:hover {
        padding-bottom: 2px;
        border-bottom: 2px solid;
    }
`;
//로그인과 회원가입 버튼을 위한 컴포넌트
const LoginBox = styled.div`
    display: flex;
    align-items: center;
`;

export default ({ isLoggedIn, setUserObj }) => {
    const tapLogin = () => {
        const auth = getAuth();
        if (auth.currentUser) {
            signOut(auth)
                .then(() => {
                    // Sign-out successful.
                    setUserObj(defaultObj);
                    console.log(1);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };
    console.log();
    return (
        <>
            <Header>
                <FlexBox className="inner">
                    <Logo>
                        <Link to="/">CNU bit</Link>
                    </Logo>

                    <Gnb>
                        <NavGroup>
                            {/* navList에 존재하는 nav들을 map을 이용하여 반복 */}
                            {navList.map(({ path, name }, idx) => (
                                <NavLink key={idx}>
                                    <Link to={path}>{name}</Link>
                                </NavLink>
                            ))}
                        </NavGroup>

                        {/* 로그인 네비 부분 */}
                        <LoginBox>
                            <NavLink>
                                <Link to="/login" onClick={tapLogin}>
                                    {isLoggedIn ? `로그아웃` : `로그인`}
                                </Link>
                            </NavLink>
                        </LoginBox>

                        {/* 회원가입 네비 부분 */}
                        <LoginBox>
                            <NavLink>
                                <Link to="/signup">회원가입</Link>
                            </NavLink>
                        </LoginBox>
                    </Gnb>
                </FlexBox>
            </Header>
        </>
    );
};
