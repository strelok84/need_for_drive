import React from "react";
import "./formMain.scss";
import OrderHeader from "../OrderHeader/OrderHeader";
import MapMain from "../MapMain/MapMain";
import ModelMain from "../ModelMain/ModelMain";
import AddMain from "../AddMain/AddMain";
import FinalMain from "../FinalMain/FinalMain";


function Map(props) {
  const components = {
    MapMain: MapMain,
    ModelMain:ModelMain,
    AddMain:AddMain,
    FinalMain:FinalMain
  };
  const Tagname = components[props.orderPage]
  return (
    <div className="form__map">
      <OrderHeader name={props.name} />
      <Tagname />
    </div>
  );
}

export default Map;
