// 구매버튼을 눌렀을떄 발생하는 함수 매수 버튼과 동일한 로직

const sellCoin = (
    amount,
    coinPrice,
    coinCode,
    userInfo,
    setUserInfo,
    coinName
) => {
    let curUserInfo = { ...userInfo };
    if (curUserInfo["id"] === "") {
        alert("로그인 후 이용할수 있습니다.");
    } else if (amount > curUserInfo["coin"][coinCode]["quantity"]) {
        alert(
            `${coinName} 보유 수량(${curUserInfo["coin"][coinCode]["quantity"]})보다 많습니다.`
        );
    } else {
        // 구매가 가능할떄 발생하는 로직
        curUserInfo["cash"] += coinPrice * amount;
        curUserInfo["coin"][coinCode]["boughtPrice"] -=
            (curUserInfo["coin"][coinCode]["boughtPrice"] /
                curUserInfo["coin"][coinCode]["quantity"]) *
            amount;
        curUserInfo["coin"][coinCode]["quantity"] -= Number(amount);
        setUserInfo(curUserInfo);
        alert(`${coinName}을 ${amount}개 매도하였습니다. `);
    }
};
export default sellCoin;
