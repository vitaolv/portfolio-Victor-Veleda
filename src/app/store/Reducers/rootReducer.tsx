import { combineReducers } from "redux";
import { menuReducer } from "./menuReducer";


export const rootReducer = combineReducers({
    menuBurger: menuReducer,
});