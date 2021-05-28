import {combineReducers} from "redux";
import {cityReducer} from "../redux/city/reducer";

export const rootReducer = combineReducers({
    cities: cityReducer,
    points: cityReducer
});