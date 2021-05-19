import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import {
  FormMain,
  FormMainWrapper,
  FormMainLent,
  FormMainAside,
  FormMainLane,
  FormMainOrder,
  FormMainPoint,
  FormMainPickup,
  FormMainDots,
  FormMainAddress,
  FormMainCost,
  FormMainBtn,
  FormMainModel,
  ModelRadioWrapper,
  AllModel,
  Econom,
  Premium,
  Color,
  FormMainModelAside,
  Basket,
} from "./styled";
import basket from "../../../../assets/img/basket.svg";

function Add() {
  const [startDate, setStartDate] = useState(new Date());
  const aside = () => {
    const order = document.getElementById("order");
    const pickpoint = document.getElementById("pickpoint");
    const model = document.getElementById("model");
    const cost = document.getElementById("cost");
    const cardWrapper = document.getElementById("cardWrapper");
    const formMainModel = document.getElementById("formMainModel");
    const formMain = document.getElementById("formMain");
    const basket = document.getElementById("basket");
    basket.classList.toggle("basket");
    order.classList.toggle("basket");
    pickpoint.classList.toggle("basket");
    model.classList.toggle("basket");
    cost.classList.toggle("basket");
    formMain.classList.toggle("basket");
    cardWrapper.classList.toggle("disable");
    formMainModel.classList.toggle("disable");
  };
  return (
    <FormMain id="formMain">
      <FormMainWrapper>
        <FormMainLent>
          <FormMainModel id="formMainModel">
            <Color>Цвет</Color>
            <ModelRadioWrapper id="modelRadioWrapper">
              <AllModel
                name="model"
                type="radio"
                value="all"
                id="allmodel"
                defaultChecked
              />
              <label for="allmodel">Любой</label>
              <Econom name="model" type="radio" value="econom" id="econom" />
              <label for="econom">Красный</label>
              <Premium name="model" type="radio" value="premium" id="premium" />
              <label for="premium">Голубой</label>
            </ModelRadioWrapper>
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
          </FormMainModel>

          <FormMainAside>
            <FormMainLane>
              <FormMainOrder id="order">Ваш заказ</FormMainOrder>
              <FormMainPoint id="pickpoint">
                <FormMainPickup>
                  <br />
                  Пункт выдачи
                </FormMainPickup>
                <FormMainDots></FormMainDots>
                <FormMainAddress>
                  Ульяновск
                  <br />
                  Нариманова,42
                </FormMainAddress>
              </FormMainPoint>
              <FormMainModelAside id="model">
                <FormMainPickup>Модель</FormMainPickup>
                <FormMainDots></FormMainDots>
                <FormMainAddress>Hundai,I30 N</FormMainAddress>
              </FormMainModelAside>
              <FormMainCost id="cost">
                Цена: от 10000 до 32000 {"\u20BD"}
              </FormMainCost>
              <FormMainBtn>Дополнительно</FormMainBtn>
            </FormMainLane>
          </FormMainAside>
          <Basket
            id="basket"
            src={basket}
            onClick={() => {
              aside();
            }}
          />
        </FormMainLent>
      </FormMainWrapper>
    </FormMain>
  );
}

export default Add;
