import React from "react";
import "./formMain.scss";
import OrderHeader from "../OrderHeader/OrderHeader";
import MapMain from "../MapMain/MapMain";
import ModelMain from "../ModelMain/ModelMain";

function Map(props) {
  const components = {
    MapMain: MapMain,
    ModelMain:ModelMain
  };
  const Tagname = components[props.orderPage]
  return (
    <div className="form__map">
      <OrderHeader />
      <Tagname />
    </div>
  );
}

export default Map;
