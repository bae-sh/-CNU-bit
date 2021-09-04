/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import styled from "styled-components";
import FooterLogo from "../img/footer_logo.jpg";

const Footer = styled.footer`
  width: 100%;
  height: 120px;
  background-color: #3c404c;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 900px) {
    width: 900px;
  }
`;

const Inner = styled.div`
  display: flex;
`;

const LogoBox = styled.div`
  margin-right: 30px;
`;

const Content = styled.p`
  color: #9e9e9e;
  font-size: 13px;
  line-height: 1.3;
`;

export default () => (
  <Footer>
    <Inner className="inner">
      <LogoBox>
        <img src={FooterLogo} />
      </LogoBox>
      <Content>
        34134 대전광역시 유성구 대학로 99
        <br className="mobileShow" /> 충남대학교 공과대학 5호관 4층(W2)
        <br />
        Copyright (C) 2021 CNU-CSE All Rights Reserved.
        <br />
        <br />
        E-mail : hyeon1293@gmail.com
      </Content>
    </Inner>
  </Footer>
);
