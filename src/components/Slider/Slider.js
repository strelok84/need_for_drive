import React, { useRef } from "react";
import "../Slider/_slider.scss";

import arrow_prev from "../../assets/img/arrow_prev.svg";
import arrow_next from "../../assets/img/arrow_next.svg";

function Slider() {
  const dot_1=useRef(null)
  
  const dot_2 = document.getElementById("dot_2");
  const dot_3 = document.getElementById("dot_3");
  const dot_4 = document.getElementById("dot_4");
  const arr = [dot_1, dot_2, dot_3, dot_4];

  const activeSlide = (ref) => {
    ref.classList.add("active")
  };
  return (
    <div className="slider">
      <div className="slider__wrapper">
        <div className="slider__items">
          <div className="slider__item">
            <div className="slide_1" id="slide_1">
              <a
                className="slider__control_prev"
                href="#slide_4"
                role="button"
                ref={dot_1}
                onClick={activeSlide(dot_1)}
              >
                <img
                  className="arrow"
                  src={arrow_prev}
                  alt="previos slide"
                ></img>
              </a>
              <div className="slider__text">
                <h2 className="slider__text_head">Бесплатная парковка</h2>
                <h3 className="slider__text_main">
                  Оставляйте машину на платных городских парковках и разрешенных
                  местах, не нарушая ПДД, а также в аэропортах.
                </h3>
                <a href="#" className="slider__btn">
                  Подробнее
                </a>
              </div>
              <a
                className="slider__control_next "
                href="#slide_2"
                role="button"
                onClick={activeSlide(dot_2)}
              >
                <img className="arrow" src={arrow_next} alt="next slide"></img>
              </a>
            </div>
          </div>
          <div className="slider__item">
            <div className="slide_2" id="slide_2">
              <a className="slider__control_prev" href="#slide_1" role="button">
                <img
                  className="arrow"
                  src={arrow_prev}
                  alt="previos slide"
                ></img>
              </a>
              <div className="slider__text">
                <h2 className="slider__text_head">Страховка</h2>
                <h3 className="slider__text_main">
                  Полная страховка автомобиля.
                </h3>
                <a href="#" className="slider__btn_blue">
                  Подробнее
                </a>
              </div>
              <a
                className="slider__control_next "
                href="#slide_3"
                role="button"
                onClick={activeSlide(dot_3)}
              >
                <img className="arrow" src={arrow_next} alt="next slide"></img>
              </a>
            </div>
          </div>
          <div className="slider__item">
            <div className="slide_3" id="slide_3">
              <a className="slider__control_prev" href="#slide_2" role="button">
                <img
                  className="arrow"
                  src={arrow_prev}
                  alt="previos slide"
                ></img>
              </a>
              <div className="slider__text">
                <h2 className="slider__text_head">Бензин</h2>
                <h3 className="slider__text_main">
                  Полный бак на любой заправке города за наш счет.
                </h3>
                <a href="#" className="slider__btn_red">
                  Подробнее
                </a>
              </div>
              <a
                className="slider__control_next "
                href="#slide_4"
                role="button"
                onClick={activeSlide(dot_4)}
              >
                <img className="arrow" src={arrow_next} alt="next slide"></img>
              </a>
            </div>
          </div>
          <div className="slider__item">
            <div className="slide_4" id="slide_4">
              <a className="slider__control_prev" href="#slide_3" role="button">
                <img
                  className="arrow"
                  src={arrow_prev}
                  alt="previos slide"
                ></img>
              </a>
              <div className="slider__text">
                <h2 className="slider__text_head">Обслуживание</h2>
                <h3 className="slider__text_main">
                  Автомобиль проходит еженедельное ТО.
                </h3>
                <a href="#" className="slider__btn_purple">
                  Подробнее
                </a>
              </div>
              <a
                className="slider__control_next "
                href="#slide_1"
                role="button"
              >
                <img className="arrow" src={arrow_next} alt="next slide"></img>
              </a>
            </div>
          </div>
          <div className="dots">
            <a href="#slide_1" id="dot_1">
              <svg>
                <circle cx="4" cy="4" r="4"></circle>
              </svg>
            </a>
            <a href="#slide_2" id="dot_2">
              <svg>
                <circle cx="4" cy="4" r="4"></circle>
              </svg>
            </a>
            <a href="#slide_3" id="dot_3">
              <svg>
                <circle cx="4" cy="4" r="4"></circle>
              </svg>
            </a>
            <a href="#slide_4" id="dot_4">
              <svg>
                <circle cx="4" cy="4" r="4"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
