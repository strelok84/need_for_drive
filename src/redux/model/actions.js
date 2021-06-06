import { GET_CAR,SET_CAR } from "../types";
import { data } from "../../api/api";

export function GetCar() {
    return async dispatch => {    
      const json = await data.getCar()
      dispatch({type:GET_CAR, payload:json})
    };
  }

  export function SetCar(orderCar) {
    return async dispatch => {    
      dispatch({type:SET_CAR, payload:orderCar})
    };
  }  