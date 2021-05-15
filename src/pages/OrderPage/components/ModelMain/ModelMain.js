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
} from "./styled";

function Model() {
  return (
    <FormMain>
      <FormMainWrapper>
        <FormMainLent>
          <FormMainModel>
            <ModelRadioWrapper>
              <AllModel name="model" type="radio" value="all" id="allmodel" />
              <label for="allmodel">Все модели</label>
              <Econom name="model" type="radio" value="econom" id="econom"/>
              <label for="econom">Эконом</label>
              <Premium name="model" type="radio" value="premium" id="premium"/>
              <label for="premium">Премиум</label>
            </ModelRadioWrapper>
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
