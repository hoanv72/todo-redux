import { combineReducers } from "redux";
import taskReducers from "./taskReducer";

const rootReducer = combineReducers({
  taskReducers,
});

export default rootReducer;
