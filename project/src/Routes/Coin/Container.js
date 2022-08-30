// presenter에 제공해야하는 데이터를 이 js에서 제공

/* eslint-disable import/no-anonymous-default-export */
import Presenter from "./Presenter";
import React from "react";
import getCoinDataList from "../../Functions/getCoinDataList";
import { marketSelection } from "../../defaultObj";
export default ({ userInfo, setUserInfo }) => {
    const coinList = getCoinDataList(marketSelection);
    return (
        <Presenter
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            coinData={coinList}
        />
    );
};
