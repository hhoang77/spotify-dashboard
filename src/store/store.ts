import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers";

const middleware = [thunk];

export const store = createStore(rootReducer, applyMiddleware(...middleware));
