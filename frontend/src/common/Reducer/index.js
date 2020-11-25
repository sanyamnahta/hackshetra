
import { combineReducers } from "redux";
import navbarReducer from "./HeaderDrawer";
import examReducer from "./ExamReducer";

export default combineReducers({
  navbar: navbarReducer,
  examData: examReducer,
});