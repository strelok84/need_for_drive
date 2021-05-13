import React from "react";
import "./orderMain.scss";
import GoogleMapReact from "google-map-react";
import Select from "react-select";

const cityOptions = [
  { value: "Тьмутаракань", label: "Тьмутаракань" },
  { value: "Ульяновск", label: "Ульяновск" },
  { value: "Самара", label: "Самара" },
  { value: "Самара", label: "Самара" },
  { value: "Тьмутаракань", label: "Тьмутаракань" },
  { value: "Ульяновск", label: "Ульяновск" },
  { value: "Самара", label: "Самара" },
  { value: "Самара", label: "Самара" },
  { value: "Тьмутаракань", label: "Тьмутаракань" },
  { value: "Ульяновск", label: "Ульяновск" },
  { value: "Самара", label: "Самара" },
  { value: "Самара", label: "Самара" },
  { value: "Самара", label: "Самара" },
];
const inputStyles = () => ({
  border: "none",
  borderBottom: "1px solid #999999",
  borderRadius: 0,
  boxShadow: "none",
  minHeight: "19px",
});

const colourStyles = {
  control: (styles) => ({ ...styles, ...inputStyles() }),
  valueContainer: (styles) => ({ ...styles, paddingLeft: "0" }),
  indicatorsContainer: (styles) => ({ ...styles, minHeight: "19px" }),
  indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
  dropdownIndicator: (styles) => ({ ...styles, display: "none" }),
  clearIndicator: (styles) => ({ ...styles, padding: "0" }),
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

function Order_main() {
  return (
    <div className="form-main">
      <div className="form-main__wrapper">
        <div className="form-main__lent">
          <div className="form-main__map">
            <div className="form-main__map--order">
              <form className="input__wrapper_sity">
                <label for="city">Город</label>
                <Select
                  className="form-main__map--sity"
                  isClearable="true"
                  options={cityOptions}
                  styles={colourStyles}
                  placeholder="Начните вводить город..."
                />
              </form>
              <form className="input__wrapper_point">
                <label for="point"></label>
                <Select
                  className="form-main__map--point"
                  isClearable="true"
                  options={cityOptions}
                  styles={colourStyles}
                  placeholder="Начните вводить пункт..."
                />
              </form>
            </div>
            <div className="chooze">Выбрать на карте</div>
            <div className="google__map">
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyDEUoFQqwctWUViRtQq47lU8YuYXvAiXkI",
                }}
                center={{ lat: 54.31, lng: 48.39 }}
                zoom={14}
              ></GoogleMapReact>
            </div>
          </div>
          <div className="form-main__aside">
            <div className="form-main__lane">
              <div className="form-main__order">Ваш заказ</div>
              <div className="form-main__point">
                <div className="form-main__piсkup">
                  <br />
                  Пункт выдачи
                </div>
                {<div className="form-main__dots"> </div>}
                <div className="form-main__address">
                  Ульяновск,
                  <br />
                  Нариманова 42
                </div>
              </div>
              <div className="form-main__cost">
                Цена: от 8000 до 12000 {"\u20BD"}
              </div>
              <div href="#" className="form-main__btn">
                Выбрать модель
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order_main;
