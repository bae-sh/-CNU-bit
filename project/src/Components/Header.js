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
    padding: 0 80px;
    background-color: #fff;
    box-shadow: 0 0 10px -5px #303030;
    z-index: 1; //z축 순서 스크롤해도 최상위 유지
    @media only screen and (max-width: 800px) {
        width: 800px;
    }
`;
// 최상위 아래에 자식들을 flex주기위한 컴포넌트
const FlexBox = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;
// CNU bit 로고 컴포넌트
const Logo = styled.div`
    font-size: 35px;
    font-family: "Arimo", sans-serif;
    font-weight: 900;
    font-style: italic;
    min-width: 150px;
    color: #3c78c8;
    @media only screen and (max-width: 800px) {
        width: 800px;
    }
`;
// Global navigation bar로써 로고와 다른 div를 주었음
const Gnb = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
`;
// Gnb 아래의 자식들을 담기위한 그룹
const NavGroup = styled.ul`
    display: flex;
    align-items: center;
    width: 100%;
`;
//  각각의 네비링크에 대한 컴포넌트
const NavLink = styled.li`
    font-weight: 800;
    font-size: 18px;
    width: 80px;
    text-align: center;
    &:nth-child(5) {
        margin-left: 500px;
    }
    & > a:hover {
        padding-bottom: 2px;
        border-bottom: 2px solid;
    }
`;
const LoginBox = styled.div`
    width: 60%;
    display: flex;
    justify-content: flex-end;
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
    return (
        <>
            <Header>
                <FlexBox>
                    <Logo>
                        <Link to="/">CNU bit</Link>
                    </Logo>

                    <Gnb>
                        <NavGroup>
                            {navList.map(({ path, name }, idx) => (
                                <NavLink key={idx}>
                                    <Link to={path}>{name}</Link>
                                </NavLink>
                            ))}
                            <LoginBox>
                                <NavLink>
                                    <Link to="/login" onClick={tapLogin}>
                                        {isLoggedIn ? `로그아웃` : `로그인`}
                                    </Link>
                                </NavLink>
                                <NavLink>
                                    <Link to="/signup">회원가입</Link>
                                </NavLink>
                            </LoginBox>
                        </NavGroup>
                    </Gnb>
                </FlexBox>
            </Header>
        </>
    );
};
