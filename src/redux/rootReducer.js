import { combineReducers } from "redux";
import { cityReducer } from "../redux/city/reducer";
import { carReducer } from "../redux/model/reducer";

export const rootReducer = combineReducers({
  cities: cityReducer,
  points: cityReducer,
  orderCity: cityReducer,
  orderPoint: cityReducer,
  cars: carReducer,
  orderCar:carReducer,
});
