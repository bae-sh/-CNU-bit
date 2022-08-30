// presenter에 제공해야하는 데이터를 이 js에서 제공

/* eslint-disable import/no-anonymous-default-export */
import Presenter from "./Presenter";
import React from "react";
import getCoinDataList from "../../Functions/getCoinDataList";
import { marketSmallSelection } from "../../defaultObj";
export default ({ usersData }) => {
    const coinList = getCoinDataList(marketSmallSelection);

    return <Presenter coinData={coinList} usersData={usersData} />;
};
