// 자산같은 경우 3자리 수마다 , 를 넣어서 변경해주는 함수
const changeText = (price) => {
    let textPrice = "";
    for (let i = 1; i <= price.length; i++) {
        textPrice = price[price.length - i] + textPrice;
        if (i % 3 === 0 && i !== price.length) {
            textPrice = "," + textPrice;
        }
    }
    return textPrice;
};
export default changeText;
