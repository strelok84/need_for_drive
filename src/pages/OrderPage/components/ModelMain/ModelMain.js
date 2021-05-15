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
} from "./styled";

function Model() {
  return (
    <FormMain>
      <FormMainWrapper>
        <FormMainLent>
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
