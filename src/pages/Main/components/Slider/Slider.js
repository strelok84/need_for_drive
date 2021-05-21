import React, { useState } from "react";
import "./slider.scss";
import arrow_prev from "../../../../assets/img/arrow_prev.svg";
import arrow_next from "../../../../assets/img/arrow_next.svg";
import { Box, Wrapper, Items, Item,Slide } from "./styled";

function Slider(props) {
  let [activeSlide, setActiveSlide] = useState(1);
  return (
    <Box>
      <Wrapper>
        <Items>
          {props.slides.map((item) => (
            <Item>
              <Slide
                className={`slide_${item.slide.number}`}
                id={`slide_${item.slide.number}`}
              >
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
                  <img
                    className="arrow"
                    src={arrow_next}
                    alt="next slide"
                  ></img>
                </a>
              </Slide>
            </Item>
          ))}

          <div className="dots">
            {props.slides.map((item) => (
              <a
                href={`#slide_${item.slide.number}`}
                id={`dot_${item.slide.number}`}
                className={activeSlide === item.slide.number ? "active" : ""}
                onClick={() => {
                  setActiveSlide((activeSlide = item.slide.number));
                }}
              >
                <svg>
                  <circle cx="4" cy="4" r="4"></circle>
                </svg>
              </a>
            ))}
          </div>
        </Items>
      </Wrapper>
    </Box>
  );
}

export default Slider;
