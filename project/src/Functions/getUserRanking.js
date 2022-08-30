import getCoinDataList from "./getCoinDataList";
import { marketSelection } from "../defaultObj";

const getTotalStock = (userRanking) => {
    const coinList = getCoinDataList(marketSelection);
    let data = [];
    if (userRanking.length !== undefined) {
        data = userRanking.map((user) => {
            let totalPrice = user.cash;
            coinList.map((coin) => {
                const code = coin.code;
                const price = Number(coin["trade_price"]);
                totalPrice += user.coin[code].quantity * price;
                return "";
            });
            return { name: user.name, cash: totalPrice };
        });
    }
    return data;
};
// 총 자산이 큰순으로 정렬
const sortData = (datas) => {
    let temp = [];
    if (datas.length !== undefined) {
        temp = datas.map((data) => {
            return {
                stock: data["cash"],
                name: data["name"],
            };
        });
        temp = temp.sort((a, b) => {
            return b.stock - a.stock;
        });
    }
    return temp;
};
const getUserRanking = (usersData) => {
    let data = getTotalStock(usersData);
    return sortData(data);
};
export default getUserRanking;
