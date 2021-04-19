import React from "react";
import "../Slider/_slider.scss";
import slide_1 from "../../img/slide_1.png";
import slide_2 from "../../img/slide_2.png";
import slide_3 from "../../img/slide_3.png";
import slide_4 from "../../img/slide_4.png";
import arrow_prev from "../../img/arrow_prev.svg";
import arrow_next from "../../img/arrow_next.svg";

function Slider() {
  return (
    <div className="slider">
      <div className="slider__wrapper">
        <div className="slider__items">
          <div className="slider__item">
            <div className="slide_1" id="slide_1">
              <a className="slider__control_prev" href="#slide_4" role="button">
                <img className="arrow" src={arrow_prev}></img>
              </a>
              <div className="slider__text">
                <h2 className="slider__text_head">Бесплатная парковка</h2>
                <h3 className="slider__text_main">
                  Оставляйте машину на платных городских парковках и разрешенных
                  местах, не нарушая ПДД, а также в аэропортах.
                </h3>
                <a href="#" className="slider__btn">Подробнее</a>
              </div>
              <a
                className="slider__control_next "
                href="#slide_2"
                role="button"
              >
                <img className="arrow" src={arrow_next}></img>
              </a>
            </div>
          </div>
          <div className="slider__item">
            <div className="slide_2" id="slide_2">
              <a className="slider__control_prev" href="#slide_1" role="button">
                <img className="arrow" src={arrow_prev}></img>
              </a>
              <div>
                <h2>Бесплатная парковка</h2>
              </div>
              <a
                className="slider__control_next "
                href="#slide_3"
                role="button"
              >
                <img className="arrow" src={arrow_next}></img>
              </a>
            </div>
          </div>
          <div className="slider__item">
            <div className="slide_3" id="slide_3">
              <a className="slider__control_prev" href="#slide_2" role="button">
                <img className="arrow" src={arrow_prev}></img>
              </a>
              <a
                className="slider__control_next "
                href="#slide_4"
                role="button"
              >
                <img className="arrow" src={arrow_next}></img>
              </a>
            </div>
          </div>
          <div className="slider__item">
            <div className="slide_4" id="slide_4">
              <a className="slider__control_prev" href="#slide_3" role="button">
                <img className="arrow" src={arrow_prev}></img>
              </a>
              <a
                className="slider__control_next "
                href="#slide_1"
                role="button"
              >
                <img className="arrow" src={arrow_next}></img>
              </a>
            </div>
          </div>
          <div className="dots">
            <a href="#slide_1">
              <svg>
                <circle cx="4" cy="4" r="4"></circle>
              </svg>
            </a>
            <a href="#slide_2">
              <svg>
                <circle cx="4" cy="4" r="4"></circle>
              </svg>
            </a>
            <a href="#slide_3">
              <svg>
                <circle cx="4" cy="4" r="4"></circle>
              </svg>
            </a>
            <a href="#slide_4">
              <svg>
                <circle cx="4" cy="4" r="4"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* <a className="slider__control slider__control_prev" href="#slide_4" role="button"></a>
    <a className="slider__control slider__control_next slider__control_show" href="#slide_1" role="button"></a> */}
    </div>
  );
}

export default Slider;
