import buyCoin from "./buyCoin";
import sellCoin from "./sellCoin";
const handlePrompt = (
  current,
  coinPrice,
  coinCode,
  userInfo,
  setUserInfo,
  coinName
) => {
  let text = current === "buy" ? "매수" : "매도";
  let amount = prompt(`${text}수량을 입력하시오.`);
  if (amount === null) {
  } else if (isNaN(amount) || amount <= 0) {
    alert("0보다 큰 숫자만 입력 가능합니다.");
  } else if (amount > 0) {
    current === "buy"
      ? buyCoin(amount, coinPrice, coinCode, userInfo, setUserInfo, coinName)
      : sellCoin(amount, coinPrice, coinCode, userInfo, setUserInfo, coinName);
  }
  return amount;
};

export default handlePrompt;
