const buyCoin = (
  amount,
  coinPrice,
  coinCode,
  userInfo,
  setUserInfo,
  coinName
) => {
  let curUserInfo = { ...userInfo };
  if (coinPrice * amount > curUserInfo["cash"]) {
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
