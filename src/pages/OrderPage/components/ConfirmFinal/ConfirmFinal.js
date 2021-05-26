import React, { useState } from "react";
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
  Basket,
  FormMainItemAside,
  FinalOrder,
  ModelName,
  ModelNumber,
  Fuel,
  Available,
  OrderWrapper,
  CarImg,
} from "./styled";
import basket from "../../../../assets/img/basket.svg";
import I30N from "../../../../assets/img/I30N.png";
import { Modal } from "../../OrderPage";

function Add() {
  const aside = () => {
    const menuItem = Array.from(document.querySelectorAll(".menuItem"));
    const order = document.getElementById("order");
    const pickpoint = document.getElementById("pickpoint");
    const cost = document.getElementById("cost");
    const formMainModel = document.getElementById("formMainModel");
    const formMain = document.getElementById("formMain");
    const basket = document.getElementById("basket");
    basket.classList.toggle("basket");
    order.classList.toggle("basket");
    pickpoint.classList.toggle("basket");
    cost.classList.toggle("basket");
    formMain.classList.toggle("basket");
    formMainModel.classList.toggle("disable");
    menuItem.forEach((item) => item.classList.toggle("basket"));
  };
  const modal =()=>{
    const modal = document.getElementById("modal");
    modal.style.display="flex";
  }
  return (
    <FormMain id="formMain">
      <FormMainWrapper>
        <FormMainLent>
          <FormMainModel id="formMainModel">
            <FinalOrder>
              <ModelName>Hundai,I30N</ModelName>
              <ModelNumber>K 761 HA 763</ModelNumber>
              <Fuel>
                <b>Топливо</b> 100%
              </Fuel>
              <Available>
                <b>Доступна с</b> 12.06.2019 12:00
              </Available>
            </FinalOrder>
            <CarImg src={I30N}></CarImg>
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
              <FormMainBtn  href="./map"         
              >
                Отменить
              </FormMainBtn>
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
