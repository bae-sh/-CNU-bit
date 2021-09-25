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

export default ({ userRanking }) => {
  return (
    <div class="inner">
      <Main>
        <h1>랭킹</h1>
        <hr></hr>
        <Ranking userRanking={userRanking} viewIdx={0} />
      </Main>
    </div>
  );
};
