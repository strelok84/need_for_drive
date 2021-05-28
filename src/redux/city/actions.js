import { GET_CITY,GET_POINT,SET_CITY, SET_POINT } from "../types";
import { data } from "../../api/api";

export function GetCity() {
  return async dispatch => {    
    const json = await data.getCity()
    dispatch({type:GET_CITY, payload:json})
  };
}
export function GetPoint(){
  return async dispatch => {    
    const json = await data.getPoint()
    dispatch({type:GET_POINT, payload:json})
  };
}

export function SetCity(orderSity) {
  return async dispatch => {    
    dispatch({type:SET_CITY, payload:orderSity})
  };
}

export function SetPoint(orderPoint){
  return async dispatch =>{
    dispatch({type:SET_POINT,payload:orderPoint})
  }
}