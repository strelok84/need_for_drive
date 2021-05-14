import React from "react";
import "./formMain.scss";
import OrderHeader from "../OrderHeader/OrderHeader";
import OrderMain from "../MapMain/MapMain";

class Map extends React.Component {
  render() {
    return (
      <div className="form__map">
        <OrderHeader />
        <OrderMain />
      </div>
    );
  }
}

export default Map;
