/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import styled from "styled-components";

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
const Content = styled.div`
  width: 90%;
  margin: auto;
  & > section {
    margin-top: 60px;
    & > p {
      font-size: 20px;
      line-height: 30px;
    }
  }
`;
export default ({}) => {
  return (
    <div class="inner">
      <Main>
        <h1>이용안내</h1>
        <hr></hr>
        <Content>
          <section>
            <p>
              반갑습니다. CNU bit입니다.
              <br />
              <br />
              저희 CNU bit 는 보다 쉽고 간편하게 코인 모의투자를 할수 있는 것이
              큰 장점 입니다.
              <br /> 또한 자신의 자산정도를 랭킹으로 확인 할수 있습니다.
              <br />
              <br />
              기본적으로 구매할수 있는 코인은 다음과 같습니다.
              <br />
              비트코인,이더리움,라이트코인,리플,이더리움클래식,퀸텀,스팀,아더
              <br />
              <br />
              코인의 가격은 업비트 OPEN API를 이용하여 실시간으로 갱신하고
              있습니다. <br />
              사용방법은 다음과 같습니다.
              <br />
              <br />
              1. 회원가입을 합니다.
              <br />
              2. 첫 회원은 기본적으로 가상머니 5억원을 받습니다. <br />
              3. 이 머니로 코인을 매수/매도를 하여 자신의 자산을 늘릴 수
              있습니다.
              <br />
              4. 자신의 자산이 어느정도 인지 랭킹에서 확인할수 있습니다.
              <br />
            </p>
          </section>
        </Content>
      </Main>
    </div>
  );
};
