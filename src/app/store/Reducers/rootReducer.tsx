import { combineReducers } from "redux";
import { menuReducer } from "./menuReducer";
import { notificationReducer } from "./notificationReducer";


export const rootReducer = combineReducers({
    menuBurger: menuReducer,
    notification: notificationReducer,
});