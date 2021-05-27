import { GET_CITY } from "../types";

const initialState = {
  cities: {},
};

export const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITY:
      return { ...state, cities: action.payload };
    default:
      return state;
  }
};
