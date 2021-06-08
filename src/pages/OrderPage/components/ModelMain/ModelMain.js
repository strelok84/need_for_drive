import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { GetCar } from "../../../../redux/model/actions";
import {
  FormMain,
  FormMainWrapper,
  FormMainLent,
  FormMainAside,
  FormMainLane,
  FormMainOrder,
  FormMainPoint,
  FormMainPickup,
  FormMainDots,
  FormMainAddress,
  FormMainCost,
  FormMainBtn,
  FormMainModel,
  ModelRadioWrapper,
  AllModel,
  Econom,
  Premium,
  CardWrapper,
  FormMainModelAside,
  Basket,
  Radio,
  RadioBox,
} from "./styled";
import Card from "./components/Card";
import basket from "../../../../assets/img/basket.svg";
import { data } from "../../../../api/api";



function Model() {
  const [categories, setCategories] = useState([]);
  const [cars, setCars]= useState([])
  const aside = () => {
    const order = document.getElementById("order");
    const pickpoint = document.getElementById("pickpoint");
    const model = document.getElementById("model");
    const cost = document.getElementById("cost");
    const cardWrapper = document.getElementById("cardWrapper");
    const formMainModel = document.getElementById("formMainModel");
    const formMain = document.getElementById("formMain");
    const basket = document.getElementById("basket");
    basket.classList.toggle("basket");
    order.classList.toggle("basket");
    pickpoint.classList.toggle("basket");
    model.classList.toggle("basket");
    cost.classList.toggle("basket");
    formMain.classList.toggle("basket");
    cardWrapper.classList.toggle("disable");
    formMainModel.classList.toggle("disable");
  };
  useEffect(()=>{
  data.getCategory().then((response) => {
    setCategories(response?.data);
    console.log(cars)    
  });
},[])

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetCar());
  }, [dispatch]);
  let carsFirst = useSelector((state) => state.cars.cars.data);
  useEffect(() => {
    setCars(carsFirst)
  }, []);
  
  const orderCar = useSelector((state) => state.orderCar.orderCar);
  const orderCity = useSelector((state) => state.orderCity.orderCity);
  const orderPoint = useSelector((state) => state.orderPoint.orderPoint);

  return (
    <FormMain id="formMain">
      <FormMainWrapper>
        <FormMainLent>
          <FormMainModel id="formMainModel">
            <ModelRadioWrapper id="modelRadioWrapper">
              <AllModel
                name="model"
                type="radio"
                value="all"
                id="allmodel"
                defaultChecked
              />
              <label htmlFor="allmodel">
                <span>Все модели</span>
              </label>             
              {categories.length
                ? categories.map((item) => {
                    return (
                      <RadioBox>
                        <Radio
                          name="model"
                          type="radio"
                          id={item.name}
                          onChange={() => {
                            carsFirst=carsFirst.filter(car=>car?.categoryId?.name===item.name)
                            setCars(carsFirst)
                          }}
                        />
                        <label for={item.name}>{item.name}</label>
                      </RadioBox>
                    );
                  })
                : ""}
            </ModelRadioWrapper>
            <CardWrapper id="cardWrapper">
              {cars.map((item) => (
                <Card
                  name={item.name}
                  costMin={item.priceMin}
                  costMax={item.priceMax}
                  link={item.thumbnail.path}
                />
              ))}
            </CardWrapper>
          </FormMainModel>
          <FormMainAside>
            <FormMainLane>
              <FormMainOrder id="order">Ваш заказ</FormMainOrder>
              {orderCity && orderPoint ? (
                <FormMainPoint id="pickpoint">
                  <FormMainPickup>
                    <br />
                    Пункт выдачи
                  </FormMainPickup>
                  <FormMainDots></FormMainDots>
                  <FormMainAddress>
                    {orderCity}
                    <br />
                    {orderPoint}
                  </FormMainAddress>
                </FormMainPoint>
              ) : (
                ""
              )}
              {orderCar ? (
                <FormMainModelAside id="model">
                  <FormMainPickup>Модель</FormMainPickup>
                  <FormMainDots></FormMainDots>
                  <FormMainAddress>{orderCar}</FormMainAddress>
                </FormMainModelAside>
              ) : (
                ""
              )}
              <FormMainCost id="cost">
                Цена: от 10000 до 32000 {"\u20BD"}
              </FormMainCost>
              <FormMainBtn href="./add">Дополнительно</FormMainBtn>
            </FormMainLane>
          </FormMainAside>
          <Basket
            id="basket"
            src={basket}
            onClick={() => {
              aside();
            }}
          />
        </FormMainLent>
      </FormMainWrapper>
    </FormMain>
  );
}

export default Model;
