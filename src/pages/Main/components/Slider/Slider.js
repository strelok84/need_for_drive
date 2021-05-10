import React, { useState } from "react";
import "./slider.scss";
import arrow_prev from "../../../../assets/img/arrow_prev.svg";
import arrow_next from "../../../../assets/img/arrow_next.svg";

function Slider(props) {
  let [activeSlide, setActiveSlide] = useState(1);  
  return (
    <div className="slider">
      <div className="slider__wrapper">
        <div className="slider__items">
          {props.slides.map((item)=>(
            <div className="slider__item">
            <div className={`slide_${item.slide.number}`} id={`slide_${item.slide.number}`}>
              <a
                className="slider__control_prev"
                href={`#slide_${item.slide.prev_slider}`}
                role="button"
                onClick={() => {
                  setActiveSlide((activeSlide = item.slide.prev_slider));
                }}
              >
                <img
                  className="arrow"
                  src={arrow_prev}
                  alt="previos slide"
                ></img>
              </a>
              <div className="slider__text">
                <h2 className="slider__text_head">{`${item.slide.text_head}`}</h2>
                <h3 className="slider__text_main">{`${item.slide.text_main}`}</h3>
                <a href="#" className="slider__btn">
                  Подробнее
                </a>
              </div>
              <a
                className="slider__control_next "
                href={`#slide_${item.slide.next_slider}`}
                role="button"
                onClick={() => {
                  setActiveSlide((activeSlide = item.slide.next_slider));
                }}
              >
                <img className="arrow" src={arrow_next} alt="next slide"></img>
              </a>
            </div>
          </div>
          ))}
          
          <div className="dots">
            <a
              href="#slide_1"
              id="dot_1"
              className={activeSlide === 1 ? "active" : ""}
              onClick={() => {
                setActiveSlide((activeSlide = 1));
              }}
            >
              <svg>
                <circle cx="4" cy="4" r="4"></circle>
              </svg>
            </a>
            <a
              href="#slide_2"
              id="dot_2"
              className={activeSlide === 2 ? "active" : ""}
              onClick={() => {
                setActiveSlide((activeSlide = 2));
              }}
            >
              <svg>
                <circle cx="4" cy="4" r="4"></circle>
              </svg>
            </a>
            <a
              href="#slide_3"
              id="dot_3"
              className={activeSlide === 3 ? "active" : ""}
              onClick={() => {
                setActiveSlide((activeSlide = 3));
              }}
            >
              <svg>
                <circle cx="4" cy="4" r="4"></circle>
              </svg>
            </a>
            <a
              href="#slide_4"
              id="dot_4"
              className={activeSlide === 4 ? "active" : ""}
              onClick={() => {
                setActiveSlide((activeSlide = 4));
              }}
            >
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
