import { GET_CITY,GET_POINT } from "../types";
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