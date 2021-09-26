import styled from "styled-components";

import medalImage from "../Functions/medalImage";
import changeText from "../Functions/changeText";
const Table = styled.table`
  width: 100%;
  border: 1px solid #ededed;
  margin-top: 50px;
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
const Ranking = ({ userRanking, viewIdx }) => {
  return (
    <Table>
      <Row>
        <th>랭크</th>
        <th>닉네임</th>
        <th>총자산</th>
        <th>수익률</th>
      </Row>
      {userRanking.map((userInfo, index) => {
        if (viewIdx === 0 || index < viewIdx) {
          return (
            <Row key={index}>
              <td>{medalImage(index + 1)}</td>
              <td>{userInfo.name}</td>
              <td>{changeText(String(userInfo.stock))}</td>
              <td>{`${changeText(String(userInfo.stock / 500000000))}%`}</td>
            </Row>
          );
        }
      })}
    </Table>
  );
};

export default Ranking;
