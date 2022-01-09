// 랭킹 정보를 나타내는 페이지

/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";

import Ranking from "../../Components/Ranking";
const Main = styled.div`
    background-color: #ffffff;
    width: 100%;
    margin: auto;
    flex: 1;
    padding: 100px;

    & > h1 {
        font-size: 40px;
        font-weight: 600;
        margin-bottom: 20px;
    }
    & > h2 {
        font-size: 35px;
        font-weight: 600;
        margin: 40px 50px;
    }
    & > h3 {
        font-size: 30px;
        font-weight: 500;
        margin: 40px 50px;
    }
`;
// 메인 페이지에서 사용한 랭킹js를 재활용

export default ({ usersData }) => {
    return (
        <div className="inner">
            <Main>
                <h1>랭킹</h1>
                <hr></hr>
                <Ranking viewIdx={0} usersData={usersData} />
            </Main>
        </div>
    );
};
