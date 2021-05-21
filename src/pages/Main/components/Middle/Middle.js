import React from "react";

import Sity_marker from "../../../../assets/img/Sity_marker.svg";
import {
  Main,
  MainHeader,
  MainSlogan,
  MainSity,
  MainSityName,
  MainSityMarker,
  MainSection,
  MainKarshering,
  MainSectionSlogan,
  MainMinute,
  MainBtn,
  MainFooter,
  MainYears,
  MainPhone
} from "./styled";

function Middle() {
  return (
    <Main>
      <MainHeader>
        <MainSlogan>Need for drive</MainSlogan>
        <MainSity>
          <MainSityName>
            <MainSityMarker
              src={Sity_marker}
              alt="Sity_marker"
            ></MainSityMarker>
            Ульяновск
          </MainSityName>
        </MainSity>
      </MainHeader>
      <MainSection>
        <MainKarshering>Каршеринг</MainKarshering>
        <MainSectionSlogan>Need for drive</MainSectionSlogan>
        <MainMinute>
          Поминутная аренда авто твоего города
        </MainMinute>
        <MainBtn href="./map">
          Забронировать
        </MainBtn>
      </MainSection>
      <MainFooter>
        <MainYears>
          {"\u00A9"}2016-2019 {"\u00AB"}Heed for drive{"\u00BB"}
        </MainYears>
        <MainPhone>8 (495) 234-22-44</MainPhone>
      </MainFooter>
    </Main>
  );
}

export default Middle;
