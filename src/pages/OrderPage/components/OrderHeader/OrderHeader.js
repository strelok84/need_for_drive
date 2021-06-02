import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
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
  Number,
} from "./styled";

function Order_header(props) {
  const city = useSelector((state) => state.orderCity.orderCity);
  const point = useSelector((state) => state.orderPoint.orderPoint);
  /* const list = (item) => {
    const bdkr = document.getElementById("bdkr");
    const place = document.querySelector(".lane-breadcrumbs__place");
    const model = document.querySelector(".lane-breadcrumbs__model");
    const add = document.querySelector(".lane-breadcrumbs__add");
    const total = document.querySelector(".lane-breadcrumbs__total");
    const number = document.querySelector(".lane-breadcrumbs__number");
    const form_header=document.getElementById("form-header");
    const form_main = document.getElementById("form-main");
    if (window.innerWidth < 768) {     
      if(item==="place"){
        place.classList.toggle("hidden");
      }else if(item==="model"){
        model.classList.toggle("hidden");
      }else if(item==="add"){
        add.classList.toggle("hidden");
      }else if(item==="total"){
        total.classList.toggle("hidden");
      }
      place.classList.toggle("hidden");
      model.classList.toggle("hidden");
      add.classList.toggle("hidden");
      total.classList.toggle("hidden");
      form_header.classList.toggle("menu");
      form_main.classList.toggle("menu");
    }
  }; */
  useEffect(() => {
    window.addEventListener("resize", () => {
      width = window.innerWidth;
      resize();
    });
    const place = document.querySelector(".lane-breadcrumbs__place");
    const model = document.querySelector(".lane-breadcrumbs__model");
    const add = document.querySelector(".lane-breadcrumbs__add");
    const total = document.querySelector(".lane-breadcrumbs__total");
    const number = document.querySelector(".lane-breadcrumbs__number");
    const form_header=document.getElementById("form-header");
    let width = window.innerWidth;

    if (props.name === "ConfirmFinal") {
      place.classList.add("confirm");
      model.classList.add("confirm");
      add.classList.add("confirm");
      total.classList.add("confirm");
      number.classList.add("confirm");
      const triangle = document.querySelectorAll(".triangle");
      triangle.forEach((item) => {
        item.style.display = "none";
      });
    }
    const resize = () => {
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
    };
    switch (props.name) {
      case "model":
        model.classList.add("now");
        place.classList.remove("now");
        form_header.classList.add("mobile-fixed")
        break;
      case "place":
        place.classList.add("now");
        model.classList.remove("now");
        break;
      case "add":
        add.classList.add("now");
        model.classList.remove("now");
        break;
      case "total":
        total.classList.add("now");
        add.classList.remove("now");
        break;
      case "final":
        total.classList.add("now");
        add.classList.remove("now");
        break;
      default:
        console.log("wrong_name");
    }
    resize();
  });
  return (
    <FormHeader id="form-header">
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
            className="lane-breadcrumbs__place"
          >
            Местоположение
          </Place>
          <img src={triangle} className="triangle"></img>
          <Model
            to={point && city ? "./model" : "#"}
            className="lane-breadcrumbs__model"
          >
            Модель
          </Model>
          <img src={triangle} className="triangle"></img>
          <Add
            href="/need_for_drive/add"
            className="lane-breadcrumbs__add"
          >
            Дополнительно
          </Add>
          <img src={triangle} className="triangle"></img>
          <Total
            href="/need_for_drive/final"
            className="lane-breadcrumbs__total"
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
