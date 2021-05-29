import React, { useEffect, useRef, useState } from "react";
import GoogleMapReact from "google-map-react";

import Select from "react-select";
import basket from "../../../../assets/img/basket.svg";
import {
  Basket,
  FormMain,
  Wrapper,
  Lent,
  Map,
  MapOrder,
  InputWrapperSity,
  InputWrapperPoint,
  Chooze,
  GoogleMapBox,
  Aside,
  Lane,
  FormMainOrder,
  FormMainPoint,
  FormMainPickUp,
  FormMainDots,
  Address,
  Marker,
  Button,
} from "./styled";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  GetCity,
  GetPoint,
  SetCity,
  SetPoint,
} from "../../../../redux/city/actions";

const inputStyles = () => ({
  border: "none",
  borderBottom: "1px solid #999999",
  borderRadius: 0,
  boxShadow: "none",
  minHeight: "19px",
  paddingLeft: "5px",
  margin: "auto 5% auto auto",
  ":hover": { borderColor: "#0EC261" },
});

const colourStyles = {
  control: (styles) => ({ ...styles, ...inputStyles() }),
  valueContainer: (styles) => ({ ...styles, paddingLeft: "0" }),
  indicatorsContainer: (styles) => ({ ...styles, minHeight: "19px" }),
  indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
  dropdownIndicator: (styles) => ({ ...styles, display: "none" }),
  clearIndicator: (styles) => ({ ...styles, padding: "0" }),
  container: (provided, state) => ({
    ...provided,
    border: "0",
    marginBottom: "14px",
    marginLeft: "5px",
    font: '300 normal 14px/16px "Roboto", sans-serif',
    color: "#121212",
    outline: "none",
    width: "224px",
  }),
  menu: (provided, state) => ({
    ...provided,
    borderRadius: 0,
    marginTop: 0,
    color: state.isSelected ? "red" : "#999",
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isFocused ? "#0EC261" : "#999",
    backgroundColor: "none",
  }),
};
const FormSity = {
  border: "0",
  marginBottom: "14px",
  marginLeft: "5px",
  font: '300 normal 14px/16px "Roboto", sans-serif',
  color: "#121212",
  outline: "none",
  width: "224px",
};

const position = {
  lat: 37.772,
  lng: -122.214,
};

let optionsPoint = [];
//5723fb56-580e-43c0-ae85-0ba0cfb5a4dd - streloc84
//bd403854-01c0-404d-81a7-6847c7363770 - cucumberivanoff
function MapMain() {
  let [pointsNow, setPoints] = useState([]);
  const geocode = async (city, address) => {
    const url = `https://geocode-maps.yandex.ru/1.x/?format=json&apikey=bd403854-01c0-404d-81a7-6847c7363770&geocode=${city}, ${address}`;
    let request = () => {
      return fetch(url);
    };
    let response = await request(url);
    if (response.ok) {
      let data = await response.json();
      let coords = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(
        " "
      );
      return coords;
    } else {
      console.log(response.error);
    }
  };

  const selectInputRef = useRef();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCity());
    dispatch(GetPoint());
  }, [dispatch]);

  const cities = useSelector((state) => state.cities.cities.data); 
  const city = useSelector((state) => state.orderCity.orderCity);
  const optionsCity = cities.map((city) => ({
    value: city.name,
    label: city.name,
  }));
  if (!city && selectInputRef.current) {
    selectInputRef.current.select.clearValue();
  }

  const points = useSelector((state) => state.points.points.data);
  const point = useSelector((state) => state.orderPoint.orderPoint);  
  const nullFilter = points.filter((point) => point.cityId !== null);
  const filter2 = nullFilter.filter((point) => point.cityId.name === city);

  

  useEffect(()=>{
    optionsPoint = filter2.map((point, index) => ({
      value: point.address,
      label: point.address,
      coord: geocode(city, point.address).then((result) => {
        optionsPoint[index].coord = result;      
      }),
    }));
  })


  console.log(optionsPoint);
  const cityHandle = (value) => {
    dispatch(SetCity(value));
    if (selectInputRef.current) {
      selectInputRef.current.select.clearValue();
    }
  };

  const pointHandle = (value) => {
    dispatch(SetPoint(value));
  };

  const aside = () => {
    const order = document.querySelector(".form-main__order");
    const pickpoint = document.querySelector(".form-main__point");
    const cost = document.querySelector(".form-main__cost");
    const formMainMap = document.querySelector(".form-main__map");
    const formMain = document.querySelector(".form-main");
    const basket = document.getElementById("basket");
    basket.classList.toggle("basket");
    order.classList.toggle("basket");
    pickpoint.classList.toggle("basket");
    cost.classList.toggle("basket");
    formMain.classList.toggle("basket");
    formMainMap.classList.toggle("disable");
  };
  return (
    <FormMain className="form-main">
      <Wrapper>
        <Lent>
          <Map className="form-main__map">
            <MapOrder className="form-main__map--order">
              <InputWrapperSity>
                <label for="city">Город</label>
                <Select
                  isClearable="true"
                  options={optionsCity}
                  styles={colourStyles}
                  placeholder="Начните вводить город..."
                  onChange={(event) =>
                    cityHandle(event === null ? "" : event.value)
                  }
                />
              </InputWrapperSity>
              <InputWrapperPoint>
                <label for="point"></label>
                <Select
                  ref={selectInputRef}
                  isClearable="true"
                  options={optionsPoint}
                  styles={colourStyles}
                  placeholder="Начните вводить пункт..."
                  noOptionsMessage={() => "Нет вариантов"}
                  onChange={(event) =>
                    pointHandle(event === null ? "" : event.value)
                  }
                />
              </InputWrapperPoint>
            </MapOrder>
            <Chooze>Выбрать на карте</Chooze>
            <GoogleMapBox>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyDEUoFQqwctWUViRtQq47lU8YuYXvAiXkI",
                }}
                center={{ lat: 54.31, lng: 48.39 }}
                zoom={14}
              >
                {optionsPoint.coord
                  ? optionsPoint.map((point) => {
                      console.log(optionsPoint.coord);
                    })
                  : ""}
                {/*  <Marker lat={optionsPoint[0].coord[0]} lng={optionsPoint[0].coord[1]}></Marker> */}
              </GoogleMapReact>
            </GoogleMapBox>
          </Map>
          <Aside>
            <Lane>
              <FormMainOrder className="form-main__order">
                Ваш заказ
              </FormMainOrder>
              <FormMainPoint className="form-main__point">
                <FormMainPickUp>
                  <br />
                  Пункт выдачи
                </FormMainPickUp>
                {<FormMainDots></FormMainDots>}
                <Address>
                  {city},
                  <br />
                  {city ? point : ""}
                </Address>
              </FormMainPoint>
              <Button href="./model">Выбрать модель</Button>
            </Lane>
          </Aside>
          <Basket
            id="basket"
            src={basket}
            onClick={() => {
              aside();
            }}
          />
        </Lent>
      </Wrapper>
    </FormMain>
  );
}

export default MapMain;
