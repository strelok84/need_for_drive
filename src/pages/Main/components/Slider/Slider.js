import React, { useState } from "react";
import arrow_prev from "../../../../assets/img/arrow_prev.svg";
import arrow_next from "../../../../assets/img/arrow_next.svg";
import {
  Box,
  Wrapper,
  Items,
  Item,
  Slide,
  SliderControlPrev,
  SliderControlNext,
  ArrowImg,
  SliderText,
  SliderTextHead,
  SliderTextMain,
  SliderBtn,
  theme,
  Dots,
  Dot
} from "./styled";
import { ThemeProvider } from "styled-components";

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
                <SliderControlPrev
                  href={`#slide_${item.slide.prev_slider}`}
                  role="button"
                  onClick={() => {
                    setActiveSlide((activeSlide = item.slide.prev_slider));
                  }}
                >
                  <ArrowImg
                    className="arrow"
                    src={arrow_prev}
                    alt="previos slide"
                  ></ArrowImg>
                </SliderControlPrev>
                <SliderText>
                  <SliderTextHead>{`${item.slide.text_head}`}</SliderTextHead>
                  <SliderTextMain>{`${item.slide.text_main}`}</SliderTextMain>
                  <ThemeProvider
                    theme={((number) => {
                      if (number === 1) {
                        return theme.theme_1;
                      }else if(number===2){
                        return theme.theme_2;
                      }else if(number===3){
                        return theme.theme_3;
                      }else if(number===4){
                        return theme.theme_4;
                      }
                    })(item.slide.number)}
                  >
                    <SliderBtn href="#">Подробнее</SliderBtn>
                  </ThemeProvider>
                </SliderText>
                <SliderControlNext
                  href={`#slide_${item.slide.next_slider}`}
                  role="button"
                  onClick={() => {
                    setActiveSlide((activeSlide = item.slide.next_slider));
                  }}
                >
                  <ArrowImg
                    className="arrow"
                    src={arrow_next}
                    alt="next slide"
                  ></ArrowImg>
                </SliderControlNext>
              </Slide>
            </Item>
          ))}

          <Dots>
            {props.slides.map((item) => (
              <Dot
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
              </Dot>
            ))}
          </Dots>
        </Items>
      </Wrapper>
    </Box>
  );
}

export default Slider;
