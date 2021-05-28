import { GET_CITY, GET_POINT, SET_CITY } from "../types";

const initialState = {
  cities: { data: [{ name:""}] },
  points:{data:[{address:""}]},
  orderCity:""
};

export const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITY:
      return { ...state, cities: action.payload };
    case GET_POINT:
      return { ...state, points: action.payload };
    case SET_CITY:
      return {...state, orderCity:action.payload};
    default:
      return state;
  }
};
