// presenter에 제공해야하는 데이터를 이 js에서 제공

/* eslint-disable import/no-anonymous-default-export */
import Presenter from "./Presenter";
import { defaultObj } from "../../defaultObj";
export default () => <Presenter userObj={defaultObj} />;
