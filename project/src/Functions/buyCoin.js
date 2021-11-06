import putAxiosData from "./putAxiosData";
const buyCoin = (
    amount,
    coinPrice,
    coinCode,
    userInfo,
    setUserInfo,
    coinName
) => {
    let curUserInfo = userInfo;
    if (curUserInfo["id"] === "") {
        alert("로그인 후 이용할수 있습니다.");
    } else if (coinPrice * amount > curUserInfo["cash"]) {
        alert("현금이 부족합니다.");
    } else {
        curUserInfo["cash"] -= coinPrice * amount;
        curUserInfo["coin"][coinCode]["boughtPrice"] += coinPrice * amount;
        curUserInfo["coin"][coinCode]["quantity"] += Number(amount);
        setUserInfo(curUserInfo);
        alert(`${coinName}을 ${amount}개 매수하였습니다. `);
        putAxiosData(curUserInfo);
        localStorage.setItem("id", curUserInfo["id"]);
    }
};
export default buyCoin;
