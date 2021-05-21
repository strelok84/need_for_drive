import React from "react";

import Sidebar from "../../commons/Sidebar/Sidebar";
import Middle from "./components/Middle/Middle";
import Slider from "./components/Slider/Slider";
import styled from "styled-components/macro";
import constants from "../../styles/constants";

export const Wrapper = styled.div`
  height: 100vh;
  z-index: 8;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 16px) repeat(86, 1fr);
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    grid-template-columns: repeat(3, 16px) 17px repeat(86, 1fr);
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    grid-template-columns: repeat(4, 21.5px) repeat(86, 1fr);
  } 
`;

function Main() {
  const slides = [
    {
      slide: {
        number: 1,
        prev_slider: 4,
        next_slider: 2,
        text_head: "Бесплатная парковка",
        text_main:
          "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
      },
    },
    {
      slide: {
        number: 2,
        prev_slider: 1,
        next_slider: 3,
        text_head: "Страховка",
        text_main: "Полная страховка автомобиля.",
      },
    },
    {
      slide: {
        number: 3,
        prev_slider: 2,
        next_slider: 4,
        text_head: "Бензин",
        text_main: "Полный бак на любой заправке города за наш счет.",
      },
    },
    {
      slide: {
        number: 4,
        prev_slider: 3,
        next_slider: 1,
        text_head: "Обслуживание",
        text_main: "Автомобиль проходит еженедельное ТО.",
      },
    },
  ];
  return (
    <Wrapper>
      <Sidebar />
      <Middle />
      <Slider slides={slides} />
    </Wrapper>
  );
}

export default Main;
