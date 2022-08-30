// 전체적으로 공통 css를 적용시키기 위한 Js

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset} // 초기화 진행

    * {
        box-sizing: border-box;// 모든 box들을 box의 내부로 사용
        font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    body {
        
        font-size: 16px;

        @media only screen and (max-width: 1000px) {
            font-size: 14px;
        }
    }

    a {
        color: inherit;
        text-decoration: none;
        font-family: inherit;
    }

    button {
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    main {
        padding-top: 70px;
        min-height: calc(100vh - 120px);
        background-color: #E9EAE9;
    }

    .inner {
        width: 100%;
        padding: 40px 80px;
        margin: 0 auto;
    }

    .mobileShow {
        display: none;

        @media only screen and (max-width: 800px) {
            display: block;
        }
    }

    p, span, h1, h2, h3, h4, h5 {
        line-height: 1.5;
    }
`;

export default GlobalStyles;
