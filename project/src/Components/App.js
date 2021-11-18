//npx json-server ./data.json --port 4000
//앱의 최상단 으로써 전체 스타일을 주기위해 GlobalStyles를 만들고 Router사용과 Footer를 적용
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
