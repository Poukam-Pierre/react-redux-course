import { createStore, applyMiddleware } from "redux";
import reducer from "./user/userReducer";
import apiMiddleware from "../middleware/api";

const store = createStore(reducer, applyMiddleware(apiMiddleware))

export default store;