import React, { useEffect } from "react";
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
  CardWrapper,
  FormMainModelAside,
  Basket,
} from "./styled";
import Card from "./components/Card";
import basket from "../../../../assets/img/basket.svg";

const model = [
  {
    name: "ELANTRA",
    costMin: 12000,
    costMax: 25000,
    imgURL: "",
    class: "econom",
  },
  {
    name: "CRETA",
    costMin: 12000,
    costMax: 25000,
    imgURL: "",
    class: "premium",
  },
  {
    name: "SONATA",
    costMin: 10000,
    costMax: 32000,
    imgURL: "",
    class: "econom",
  },
  {
    name: "SONATA",
    costMin: 10000,
    costMax: 32000,
    imgURL: "",
    class: "econom",
  },
  {
    name: "SONATA",
    costMin: 10000,
    costMax: 32000,
    imgURL: "",
    class: "econom",
  },
  {
    name: "SONATA",
    costMin: 10000,
    costMax: 32000,
    imgURL: "",
    class: "econom",
  },
  {
    name: "SONATA",
    costMin: 10000,
    costMax: 32000,
    imgURL: "",
    class: "econom",
  },
];

function Model() {
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
            <ModelRadioWrapper id="modelRadioWrapper">
              <AllModel
                name="model"
                type="radio"
                value="all"
                id="allmodel"
                defaultChecked
              />
              <label for="allmodel">Все модели</label>
              <Econom name="model" type="radio" value="econom" id="econom" />
              <label for="econom">Эконом</label>
              <Premium name="model" type="radio" value="premium" id="premium" />
              <label for="premium">Премиум</label>
            </ModelRadioWrapper>
            <CardWrapper id="cardWrapper">
              {model.map((item) => (
                <Card
                  name={item.name}
                  costMin={item.costMin}
                  costMax={item.costMax}
                />
              ))}
            </CardWrapper>
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

export default Model;
