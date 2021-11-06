import putAxiosData from "./putAxiosData";
const sellCoin = (
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
    } else if (amount > curUserInfo["coin"][coinCode]["quantity"]) {
        alert(
            `${coinName} 보유 수량(${curUserInfo["coin"][coinCode]["quantity"]})보다 많습니다.`
        );
    } else {
        curUserInfo["cash"] += coinPrice * amount;
        curUserInfo["coin"][coinCode]["boughtPrice"] -=
            (curUserInfo["coin"][coinCode]["boughtPrice"] /
                curUserInfo["coin"][coinCode]["quantity"]) *
            amount;
        curUserInfo["coin"][coinCode]["quantity"] -= Number(amount);
        setUserInfo(curUserInfo);
        alert(`${coinName}을 ${amount}개 매도하였습니다. `);
        putAxiosData(curUserInfo);
        localStorage.setItem("id", curUserInfo["id"]);
    }
};
export default sellCoin;
