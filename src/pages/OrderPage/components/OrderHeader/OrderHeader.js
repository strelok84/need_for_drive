import React, { useEffect } from "react";
import "./orderHeader.scss";
import Sity_marker from "../../../../assets/img/Sity_marker.svg";
import triangle from "../../../../assets/img/triangle.svg";

function Order_header(props) {
  useEffect(() => {
    const place = document.querySelector(".lane-breadcrumbs__place");
    const model = document.querySelector(".lane-breadcrumbs__model");
    const add = document.querySelector(".lane-breadcrumbs__add");
    const total = document.querySelector(".lane-breadcrumbs__total");
    const width = window.innerWidth;
    if (width < 768) {
      switch (props.name) {
        case "model":
          model.classList.remove("hidden");
          break;
        case "place":
          place.classList.remove("hidden");
          break;
        case "add":
          add.classList.remove("hidden");
          break;
        case "total":
          total.classList.remove("hidden");
          break;
        case "final":
          total.classList.remove("hidden");
          break;  
        default:
          console.log("wrong_name")
      }
    }
  });
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
          <a
            href="/need_for_drive/map"
            className="lane-breadcrumbs__place hidden "
          >
            Местоположение
          </a>
          <img src={triangle}></img>
          <a href="/need_for_drive/model" className="lane-breadcrumbs__model hidden">
            Модель
          </a>
          <img src={triangle}></img>
          <a href="/need_for_drive/add" className="lane-breadcrumbs__add hidden">
            Дополнительно
          </a>
          <img src={triangle}></img>
          <a href="/need_for_drive/final" className="lane-breadcrumbs__total hidden">
            Итого
          </a>
        </div>
      </div>
    </div>
  );
}

export default Order_header;
