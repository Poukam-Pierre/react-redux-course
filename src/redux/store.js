import { createStore, applyMiddleware } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import reducer from "./user/userReducer";
import apiMiddleware from "../middleware/api";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist'


const persitConfig = {
    key: 'root',
    storage
}

const persisterReduced = persistReducer(persitConfig, reducer)
const store = configureStore({ reducer: persisterReduced, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware) })
// const store = createStore(reducer, applyMiddleware(apiMiddleware))
export const persistor = persistStore(store)

export default store;