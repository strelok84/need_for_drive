import React from "react";
import "./order_header.scss";
import Sity_marker from "../../../../assets/img/Sity_marker.svg";
import triangle from "../../../../assets/img/triangle.svg";

function Order_header() {
  return (
    <div className="form-header">
      <div className="form-header__wrapper">
        <div className="lane-slogan">
          <div className="form-header__slogan">Need for drive</div>
          <div className="form-header__sity">
            <img
              className="form-header__marker"
              src={Sity_marker}
              alt="Sity_marker"
            ></img>
            Ульяновск
          </div>
        </div>
      </div>
      <div className="breadcrumbs-wrapper">
        <div className="lane-breadcrumbs">
          <a href="/need_for_drive/map" className="lane-breadcrumbs__place">
            Местоположение
          </a>
          <img src={triangle}></img>
          <a href="#" className="lane-breadcrumbs__model">
            Модель
          </a>
          <img src={triangle}></img>
          <a href="#" className="lane-breadcrumbs__add">
            Дополнительно
          </a>
          <img src={triangle}></img>
          <a href="#" className="lane-breadcrumbs__total">
            Итого
          </a>
        </div>
      </div>
    </div>
  );
}

export default Order_header;
