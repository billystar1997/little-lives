import { combineReducers } from "redux";
import albumsReducer from "./albumsReducer";
import imagesReducer from "./imagesReducer";

export default combineReducers({
  albumsReducer,
  imagesReducer
});
