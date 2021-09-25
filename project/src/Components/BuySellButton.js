/* eslint-disable import/no-anonymous-default-export */
import styled from "styled-components";
import handlePrompt from "../Functions/handlePrompt";
const Button = styled.button`
  font-size: 15px;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: ${({ color }) => color};
`;
const BuySellButton = (
  current,
  coinPrice,
  coinCode,
  userInfo,
  setUserInfo,
  coinName
) => {
  return (
    <Button
      color={`${current === "buy" ? "#F75467" : "#4386F9"}`}
      onClick={() => {
        handlePrompt(
          current,
          coinPrice,
          coinCode,
          userInfo,
          setUserInfo,
          coinName
        );
      }}
    >
      {`${current === "buy" ? "매수" : "매도"}`}
    </Button>
  );
};

export default BuySellButton;
