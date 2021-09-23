/* eslint-disable import/no-anonymous-default-export */
import Presenter from "./Presenter";
const userRanking = [
  { name: "bae", stock: 500000000 },
  { name: "bae", stock: 600000000 },
  { name: "bae", stock: 700000000 },
  { name: "bae", stock: 800000000 },
  { name: "bae", stock: 900000000 },
];
export default () => <Presenter userRanking={userRanking} />;
