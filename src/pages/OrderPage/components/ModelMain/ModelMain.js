import React from "react";
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
} from "./styled";
import Card from "./components/Card";

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
 
  return (
    <FormMain>
      <FormMainWrapper>
        <FormMainLent>
          <FormMainModel>
            <ModelRadioWrapper>
              <AllModel name="model" type="radio" value="all" id="allmodel" defaultChecked/>
              <label for="allmodel">Все модели</label>
              <Econom name="model" type="radio" value="econom" id="econom"  />
              <label for="econom">Эконом</label>
              <Premium name="model" type="radio" value="premium" id="premium" />
              <label for="premium">Премиум</label>
            </ModelRadioWrapper>
            <CardWrapper>
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
              <FormMainOrder>Ваш заказ</FormMainOrder>
              <FormMainPoint>
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
              <FormMainPoint>
                <FormMainPickup>Модель</FormMainPickup>
                <FormMainDots></FormMainDots>
                <FormMainAddress>Hundai,I30 N</FormMainAddress>
              </FormMainPoint>
              <FormMainCost>Цена: от 8000 до 12000 {"\u20BD"}</FormMainCost>
              <FormMainBtn>Дополнительно</FormMainBtn>
            </FormMainLane>
          </FormMainAside>
        </FormMainLent>
      </FormMainWrapper>
    </FormMain>
  );
}

export default Model;
