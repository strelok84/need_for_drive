import { GET_CITY } from "../types";
import { data } from "../../api/api";

export function GetCity() {
  return async dispatch => {    
    const json = await data.getCity()
    dispatch({type:GET_CITY, payload:json})
  };
}
