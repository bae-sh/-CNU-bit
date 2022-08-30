// 메인 페이지의 랭크 파트 담당 Js
import styled from "styled-components";

import medalImage from "../Functions/medalImage";
import changeText from "../Functions/changeText";
import getUserRanking from "../Functions/getUserRanking";
// 최상위 Table 컴포넌트
const Table = styled.table`
    width: 100%;
    border: 1px solid #ededed;
    margin-top: 50px;
`;
// 각각의 등수 Row 에 대한 컴포넌트
const Row = styled.tr`
    border-bottom: 1px solid #ededed;
    th {
        padding: 20px;
        background-color: #f9f9f9;
    }
    td {
        padding: 15px;
        font-size: 17px;
        text-align: center;
        vertical-align: middle;
    }
    @media only screen and (max-width: 800px) {
        th:nth-child(4),
        td:nth-child(4) {
            display: none;
        }
    }
`;
// 현재 유저들의 Ranking을 메인 페이지에서 받아옴. view에 보여줄 갯수를 viewIdx로 받음
// 테이블 형식으로 랭킹을 구성
const viewRanking = (viewIdx, usersData) => {
    const userRanking = getUserRanking(usersData);
    if (userRanking.length !== 0) {
        return userRanking.map((userInfo, index) => {
            if (viewIdx === 0 || index < viewIdx) {
                return (
                    <Row key={index}>
                        <td>{medalImage(index + 1)}</td>
                        <td>{userInfo.name}</td>
                        <td>{changeText(String(userInfo.stock))}</td>
                        <td>{`${String(
                            (
                                ((userInfo.stock - 500000000) / 500000000) *
                                100
                            ).toFixed(2)
                        )}%`}</td>
                    </Row>
                );
            }
            return "";
        });
    }
};
const Ranking = ({ viewIdx, usersData }) => {
    return (
        <Table>
            <thead>
                <Row>
                    <th>랭크</th>
                    <th>닉네임</th>
                    <th>총자산</th>
                    <th>수익률</th>
                </Row>
            </thead>
            <tbody>{viewRanking(viewIdx, usersData)}</tbody>
        </Table>
    );
};

export default Ranking;
