import { combineReducers, createStore } from "redux";
import { AuthReducer } from "../Reducers/AuthReducer";
import { CartReducer } from "../Reducers/CartReducer";

const AllReducers = combineReducers({
    CartReducer,
    AuthReducer,
});

export const myStore = createStore(AllReducers)