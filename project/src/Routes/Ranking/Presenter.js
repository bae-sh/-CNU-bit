/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";
import goldMedal from "../../img/gold.png";
import siverMedal from "../../img/siver.png";
import bronzeMedal from "../../img/bronze.png";
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

const Table = styled.table`
  width: 100%;
  border: 1px solid #ededed;
`;

const Row = styled.tr`
  border-bottom: 1px solid #ededed;
  &:first-child {
    background-color: #f9f9f9;
    & > th {
      padding: 20px;
    }
  }
  & > td {
    padding: 15px;
    font-size: 17px;
    text-align: center;
    vertical-align: middle;
  }
`;
const MedalImage = styled.img`
  width: 40px;
  height: 40px;
`;
function changeText(price) {
  let textPrice = "";
  for (let i = 1; i <= price.length; i++) {
    textPrice = price[price.length - i] + textPrice;
    if (i % 3 === 0 && i !== price.length) {
      textPrice = "," + textPrice;
    }
  }
  return textPrice;
}
function medalImage(index) {
  if (index === 1) {
    return <MedalImage src={goldMedal} />;
  } else if (index === 2) {
    return <MedalImage src={siverMedal} />;
  } else if (index === 3) {
    return <MedalImage src={bronzeMedal} />;
  } else {
    return index;
  }
}
export default ({ userRanking }) => {
  return (
    <div class="inner">
      <Main>
        <h1>랭킹</h1>
        <hr></hr>
        <Table>
          <Row>
            <th>랭크</th>
            <th>닉네임</th>
            <th>총자산</th>
            <th>수익률</th>
          </Row>
          {userRanking.map((userInfo, index) => {
            return (
              <Row key={index}>
                <td>{medalImage(index + 1)}</td>
                <td>{userInfo.name}</td>
                <td>{changeText(String(userInfo.stock))}</td>
                <td>{`${changeText(String(userInfo.stock / 500000000))}%`}</td>
              </Row>
            );
          })}
        </Table>
      </Main>
    </div>
  );
};
