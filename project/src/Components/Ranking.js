// 메인 페이지의 랭크 파트 담당 Js
import styled from "styled-components";

import medalImage from "../Functions/medalImage";
import changeText from "../Functions/changeText";
// 최상위 Table 컴포넌트
const Table = styled.table`
    width: 100%;
    border: 1px solid #ededed;
    margin-top: 50px;
`;
// 각각의 등수 Row 에 대한 컴포넌트
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
// 현재 유저들의 Ranking을 메인 페이지에서 받아옴. view에 보여줄 갯수를 viewIdx로 받음
// 테이블 형식으로 랭킹을 구성
const Ranking = ({ userRanking, viewIdx }) => {
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
            <tbody>
                {/* 각각의 유저들을 보여주는 부분. 수익률 부분을 소수점 3자리로 나타냄. 기본적으로 제공되는 돈이 5억이므로 수익률 계산은 5억에서 얼마나 증가했는지 계산 */}
                {userRanking.map((userInfo, index) => {
                    if (viewIdx === 0 || index < viewIdx) {
                        return (
                            <Row key={index}>
                                <td>{medalImage(index + 1)}</td>
                                <td>{userInfo.name}</td>
                                <td>{changeText(String(userInfo.stock))}</td>
                                <td>{`${String(
                                    (
                                        (userInfo.stock - 500000000) /
                                        500000000
                                    ).toFixed(3)
                                )}%`}</td>
                            </Row>
                        );
                    }
                })}
            </tbody>
        </Table>
    );
};

export default Ranking;
