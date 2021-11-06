//반응형 , php로 유저 정보 저장, 회원가입, 리팩토링 ,api 공부
//npx json-server ./data.json --port 4000
import React from "react";
import Router from "./Router";
import GlobalStyles from "./GlobalStyles";
import Footer from "./Footer";
const App = () => {
    return (
        <div className="App">
            <GlobalStyles />
            <Router />
            <Footer />
        </div>
    );
};

export default App;
