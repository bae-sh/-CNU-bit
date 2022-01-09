// 코인 구매 버튼을 눌렀을때 발생하는 event 함수
// 매수 후에는 json을 변경 해야 하므로 putAxiosData를 import

const buyCoin = (
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
    } else if (coinPrice * amount > curUserInfo["cash"]) {
        alert("현금이 부족합니다.");
    } else {
        curUserInfo["cash"] -= coinPrice * amount;
        curUserInfo["coin"][coinCode]["boughtPrice"] += coinPrice * amount;
        curUserInfo["coin"][coinCode]["quantity"] += Number(amount);
        setUserInfo(curUserInfo);
        alert(`${coinName}을 ${amount}개 매수하였습니다. `);
    }
};
export default buyCoin;
