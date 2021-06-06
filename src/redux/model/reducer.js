import { GET_CAR,SET_CAR } from "../types";

const initialState = {
  cars: {
    data: [
      {
        name: "",
        priceMin: "",
        priceMax: "",
        thumbnail: {
          path:
            "/files/601c54bead015e0bb6997f4d_5f21d9459d3a610b850fcd57_5ea9e5f3099b810b946c7234_97cfab8f5d3e6e963d8183e5ad70e734.png",
        },
      },
    ],
  },
  orderCar:""
};

export const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAR:
      return { ...state, cars: action.payload };
    case SET_CAR:
      return { ...state, orderCar: action.payload };  
    default:
      return state;
  }
};
