import axios from "axios";

// selectList는 {"코인코드" : "코인한글명"} 으로 구성된 Object
// ex) {"KRW-BTC": "비트코인", "KRW-ETH": "이더리움" }

// setCoinData는 useState에서 반환된 set함수

export const getCoinData = async (selectList, setCoinData) => {
  const response = await axios.get("https://api.upbit.com/v1/market/all");
  const marketList = response.data.filter((list) =>
    Object.keys(selectList).includes(list.market)
  );
  const ws = new WebSocket("wss://api.upbit.com/websocket/v1");
  ws.onopen = () => {
    ws.send(
      `[{"ticket":"test"}, {"type":"ticker", "codes": ${JSON.stringify(
        marketList.map((list) => list.market)
      )}}]`
    );
  };
  ws.onmessage = async (e) => {
    const { data } = e;
    let text = await new Response(data).text();
    text = JSON.parse(text);
    text["korean_name"] = selectList[text["code"]];
    setCoinData(text);
  };
};
