/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import resetData from "../Functions/resetData";
const navList = [
    { path: "/MyStock", pathName: "myStock", name: "My자산" },
    { path: "/Coin", pathName: "coin", name: "코인" },
    { path: "/Ranking", pathName: "menual", name: "랭킹" },
    { path: "/Menual", pathName: "menual", name: "이용안내" },
];

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

const FlexBox = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.div`
    font-size: 35px;
    font-family: "Arimo", sans-serif;
    font-weight: 900;
    font-style: italic;
    width: 200px;
    color: #3c78c8;
`;

const Gnb = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

const NavGroup = styled.div`
    display: flex;
    align-items: center;
    margin-left: 40px;
    margin-right: 300px;
`;

const NavLink = styled.div`
    margin-left: 40px;
    font-weight: 800;
    font-size: 18px;

    &:hover {
        padding-bottom: 2px;
        border-bottom: 2px solid;
    }
`;

const LoginBox = styled.div`
    display: flex;
    align-items: center;
`;

export default withRouter((userInfo) => {
    return (
        <>
            <Header>
                <FlexBox className="inner">
                    <Logo>
                        <Link to="/" onClick={() => {}}>
                            CNU bit
                        </Link>
                    </Logo>

                    <Gnb>
                        <NavGroup>
                            {navList.map(({ path, name }, idx) => (
                                <NavLink key={idx}>
                                    <Link to={path} onClick={() => {}}>
                                        {name}
                                    </Link>
                                </NavLink>
                            ))}
                        </NavGroup>

                        <LoginBox>
                            <NavLink>
                                <Link
                                    to="/login"
                                    onClick={() => {
                                        resetData(userInfo.userInfo);
                                    }}
                                >
                                    {userInfo.userInfo["id"] === ""
                                        ? `로그인`
                                        : `로그아웃`}
                                </Link>
                            </NavLink>
                        </LoginBox>

                        <LoginBox>
                            <NavLink>
                                <Link to="/signup" onClick={() => {}}>
                                    회원가입
                                </Link>
                            </NavLink>
                        </LoginBox>
                    </Gnb>
                </FlexBox>
            </Header>
        </>
    );
});
