import React from "react";
import "./map.scss";
import OrderHeader from "../OrderHeader/OrderHeader";
import OrderMain from "../OrderMain/OrderMain";

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
