import React, { useEffect } from "react";
/* import "./orderHeader.scss"; */
import Sity_marker from "../../../../assets/img/Sity_marker.svg";
import triangle from "../../../../assets/img/triangle.svg";
import {
  FormHeader,
  Wrapper,
  Slogan,
  FormHeaderSlogan,
  FormHeaderSity,
  FormHeaderMarker,
  BdkrWrapper,
  LaneBdkr,
  Place,
  Model,
  Add,
  Total,
  Number
} from "./styled";

function Order_header(props) {
  useEffect(() => {
    const place = document.querySelector(".lane-breadcrumbs__place");
    const model = document.querySelector(".lane-breadcrumbs__model");
    const add = document.querySelector(".lane-breadcrumbs__add");
    const total = document.querySelector(".lane-breadcrumbs__total");
    const number = document.querySelector(".lane-breadcrumbs__number");
    const width = window.innerWidth;
   
    if(props.name==="ConfirmFinal"){
      place.classList.add("confirm");
      model.classList.add("confirm");
      add.classList.add("confirm");
      total.classList.add("confirm");
      number.classList.add("confirm");
      const triangle = document.querySelectorAll(".triangle");
     triangle.forEach((item)=>{item.style.display="none"})
     
    }
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
          console.log("wrong_name");
      }
    }
  });
  return (
    <FormHeader>
      <Wrapper>
        <Slogan>
          <FormHeaderSlogan>Need for drive</FormHeaderSlogan>
          <FormHeaderSity>
            <FormHeaderMarker
              src={Sity_marker}
              alt="Sity_marker"
            ></FormHeaderMarker>
            Ульяновск
          </FormHeaderSity>
        </Slogan>
      </Wrapper>
      <BdkrWrapper>
        <LaneBdkr id="bdkr">
          <Place
            href="/need_for_drive/map"
            className="lane-breadcrumbs__place hidden"
          >
            Местоположение
          </Place>
          <img src={triangle} className="triangle"></img>
          <Model
            href="/need_for_drive/model"
            className="lane-breadcrumbs__model hidden"
          >
            Модель
          </Model>
          <img src={triangle} className="triangle"></img>
          <Add
            href="/need_for_drive/add"
            className="lane-breadcrumbs__add hidden"
          >
            Дополнительно
          </Add>
          <img src={triangle} className="triangle"></img>
          <Total
            href="/need_for_drive/final"
            className="lane-breadcrumbs__total hidden"
          >
            Итого
          </Total>
          <Number
            href="/need_for_drive/final"
            className="lane-breadcrumbs__number"
          >
            RU 58491823
          </Number>
        </LaneBdkr>
      </BdkrWrapper>
    </FormHeader>
  );
}

export default Order_header;
