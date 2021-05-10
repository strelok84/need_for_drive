import React from "react";
import "../Main/main.scss";
import Sidebar from "../../commons/Sidebar/Sidebar";
import Middle from "./components/Middle/Middle";
import Slider from "./components/Slider/Slider";

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
    <div className="wrapper">
      <Sidebar />
      <Middle />
      <Slider slides={slides} />
    </div>
  );
}

export default Main;
