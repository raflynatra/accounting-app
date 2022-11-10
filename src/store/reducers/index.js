import { combineReducers } from "redux";
import responseReducer from "./ResponseReducer";
import userReducer from "./UserReducer";

const rootReducer = combineReducers({
  userReducer,
  responseReducer,
});

export default rootReducer;
