const sellCoin = (
  amount,
  coinPrice,
  coinCode,
  userInfo,
  setUserInfo,
  coinName
) => {
  let curUserInfo = userInfo;
  if (amount > curUserInfo["coin"][coinCode]["quantity"]) {
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
  }
};
export default sellCoin;
