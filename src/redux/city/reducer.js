import { GET_CITY, GET_POINT } from "../types";

const initialState = {
  cities: { data: [{ name: "" }] },
  points:{data:[{address:""}]}
};

export const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITY:
      return { ...state, cities: action.payload };
    case GET_POINT:
      return { ...state, points: action.payload };
    default:
      return state;
  }
};
