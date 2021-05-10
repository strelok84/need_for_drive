import React from "react";
import "./map.scss";
import Order_header from "../Order_header/Order_header";
import Order_main from "../Order_main/Order_main";

class Map extends React.Component {
  render() {
    return (
      <div className="form__map">
        <Order_header />
        <Order_main />
      </div>
    );
  }
}

export default Map;
