// 매수 혹은 매도를 클릭했을떄 prompt 창이 뜨는 부분을 담당하는 js
// 올바른 입력값이 들어오면 current 종류에 따라 매수 혹은 매도 함수를 발생시킴

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
            ? buyCoin(
                  amount,
                  coinPrice,
                  coinCode,
                  userInfo,
                  setUserInfo,
                  coinName
              )
            : sellCoin(
                  amount,
                  coinPrice,
                  coinCode,
                  userInfo,
                  setUserInfo,
                  coinName
              );
    }
    return amount;
};

export default handlePrompt;
