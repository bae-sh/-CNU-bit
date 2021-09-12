/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const navList = [
  { path: "/myStock", pathName: "myStock", name: "My자산" },
  { path: "/coin", pathName: "coin", name: "코인" },
  { path: "/rank", pathName: "rank", name: "랭킹" },
  { path: "/menual", pathName: "menual", name: "이용안내" },
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
  z-index: 1000; //z축 순서
  /* -webkit-backdrop-filter: blur(10px); */
  /* backdrop-filter: blur(7px); */

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
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const NavGroup = styled.ul`
  display: flex;
  align-items: center;
  padding-left: 80px;
`;

const NavLink = styled.li`
  margin-left: 40px;
  font-weight: 800;
  font-size: 18px;

  &:hover {
    padding-bottom: 2px;
    border-bottom: 2px solid;
  }
`;

const LoginBox = styled.ul`
  display: flex;
  align-items: center;
  & > li:nth-child(2) {
    margin-left: 30px;
  }
`;

export default withRouter(
  ({
    history: {
      location: { pathname },
    },
  }) => {
    const isRoot = pathname === "/";

    const useHome = () => {
      const [menuOn, setMenuOn] = useState({
        isOn: false,
        isBtn: false,
      });

      const handleMenuBtn = (value) => {
        setMenuOn(value);
      };

      return {
        menuOn,
        handleMenuBtn,
      };
    };

    const {
      menuOn: { isOn, isBtn },
      handleMenuBtn,
    } = useHome();
    return (
      <>
        <Header isRoot={isRoot}>
          <FlexBox className="inner">
            <Logo isRoot={isRoot}>
              <Link
                to="/"
                onClick={() => {
                  handleMenuBtn({
                    isOn: false,
                    isBtn: false,
                  });
                }}
              >
                CNU bit
              </Link>
            </Logo>
            <Gnb isOn={isOn} isBtn={isBtn}>
              <NavGroup>
                {navList.map(({ path, pathName, name }, idx) => (
                  <NavLink
                    isRoot={isRoot}
                    isCurrent={pathname.includes(pathName)}
                    isNav={true}
                    key={idx}
                  >
                    <Link
                      to={path}
                      onClick={() => {
                        handleMenuBtn({
                          isOn: false,
                          isBtn: false,
                        });
                      }}
                    >
                      {name}
                    </Link>
                  </NavLink>
                ))}
              </NavGroup>
              <LoginBox>
                <NavLink
                  isRoot={isRoot}
                  isCurrent={pathname === "/login"}
                  isNav={false}
                >
                  <Link
                    to="/login"
                    onClick={() => {
                      handleMenuBtn({
                        isOn: false,
                        isBtn: false,
                      });
                    }}
                  >
                    로그인
                  </Link>
                </NavLink>
              </LoginBox>
            </Gnb>
          </FlexBox>
        </Header>
      </>
    );
  }
);
