import { combineReducers } from "redux";
import { store } from "../store";
import authReducer from "./authReduces";
import songReducer from "./songReduces";
import artistReducer from "./artistReduces";
import genreReduce from "./genreReduces";

const rootReducer = combineReducers({
  auth: authReducer,
  song: songReducer,
  artist: artistReducer,
  genre: genreReduce,
});

export default rootReducer;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
