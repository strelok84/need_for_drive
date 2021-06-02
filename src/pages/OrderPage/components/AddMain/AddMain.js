import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "../../../../../node_modules/react-datepicker/dist/react-datepicker.css";
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
  Basket,
  DateWrapper,
  FormDateWrapper,
  RateWrapper,
  RadioInput,
  AdditionalService,
  CheckBox,
  FormMainItemAside,
} from "./styled";
import basket from "../../../../assets/img/basket.svg";

function Add() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const aside = () => {
    const menuItem = Array.from(document.querySelectorAll(".menuItem"));
    const order = document.getElementById("order");
    const pickpoint = document.getElementById("pickpoint");
    const cost = document.getElementById("cost");
    const formMainModel = document.getElementById("formMainModel");
    const formMain = document.getElementById("form-main");
    const basket = document.getElementById("basket");

    basket.classList.toggle("basket");
    order.classList.toggle("basket");
    pickpoint.classList.toggle("basket");
    cost.classList.toggle("basket");
    formMain.classList.toggle("basket");
    formMainModel.classList.toggle("disable");
    menuItem.forEach((item) => item.classList.toggle("basket"));
  };
  return (
    <FormMain id="form-main">
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
            <FormDateWrapper>
              <span>Дата аренды</span>
              <DateWrapper>
                <label>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}С
                </label>
                <DatePicker
                  onChange={(date) => setStartDate(date)}
                  selected={startDate}
                  showTimeSelect
                  dateFormat="dd.MM.yyyy HH:mm"
                  placeholderText="Введите дату и время"
                  minDate={new Date()}
                  isClearable
                />
              </DateWrapper>
              <DateWrapper>
                <label>По</label>
                <DatePicker
                  onChange={(date) => setEndDate(date)}
                  showTimeSelect
                  selected={endDate}
                  placeholderText="Введите дату и время"
                  dateFormat="dd.MM.yyyy HH:mm"
                  minDate={new Date()}
                  isClearable
                />
              </DateWrapper>
            </FormDateWrapper>
            <RateWrapper>
              <span>Тариф</span>
              <RadioInput id="minute" name="rate" type="radio"></RadioInput>
              <label for="minute">Поминутно, 7 {"\u20BD"}/мин</label>
              <RadioInput id="day" name="rate" type="radio"></RadioInput>
              <label for="day">На сутки, 1999{"\u20BD"}/сутки</label>
            </RateWrapper>
            <AdditionalService>
              <span>Доп. услуги</span>
              <CheckBox type="checkbox" id="fullTank"></CheckBox>
              <label for="fullTank">Полный бак, 500р</label>
              <CheckBox type="checkbox" id="chair"></CheckBox>
              <label for="chair">Детское кресло, 200р</label>
              <CheckBox type="checkbox" id="right"></CheckBox>
              <label for="right">Правый руль. 1600р</label>
            </AdditionalService>
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
              <FormMainItemAside className="menuItem">
                <FormMainPickup>Модель</FormMainPickup>
                <FormMainDots></FormMainDots>
                <FormMainAddress>Hundai,I30 N</FormMainAddress>
              </FormMainItemAside>
              <FormMainItemAside className="menuItem">
                <FormMainPickup>Цвет</FormMainPickup>
                <FormMainDots></FormMainDots>
                <FormMainAddress>Голубой</FormMainAddress>
              </FormMainItemAside>
              <FormMainItemAside className="menuItem">
                <FormMainPickup>Длительность аренды</FormMainPickup>
                <FormMainDots></FormMainDots>
                <FormMainAddress>1д 2ч</FormMainAddress>
              </FormMainItemAside>
              <FormMainItemAside className="menuItem">
                <FormMainPickup>Тариф</FormMainPickup>
                <FormMainDots></FormMainDots>
                <FormMainAddress>На сутки</FormMainAddress>
              </FormMainItemAside>
              <FormMainItemAside className="menuItem">
                <FormMainPickup>Полный бак</FormMainPickup>
                <FormMainDots></FormMainDots>
                <FormMainAddress>Да</FormMainAddress>
              </FormMainItemAside>
              <FormMainCost id="cost">Цена: 16000 {"\u20BD"}</FormMainCost>
              <FormMainBtn href="./final">Итого</FormMainBtn>
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
