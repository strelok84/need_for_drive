import React from "react";
import Sidebar from "../../commons/Sidebar/Sidebar";
import FormMain from "./components/FormMain/FormMain";
import styled from "styled-components/macro";
import constants from "../../styles/constants";

export const Modal = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.75);
  z-index: 400000;
  align-items: center;
`;

export const ModalContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 auto;
  background: none;
  opacity: 1;
`;

export const Confirm = styled.div`
  width: 405px;
  display: flex;
  flex-direction: column;
  font: 400 normal 24px/28px "Roboto", sans-serif;
  color: ${constants.main_black};
  @media (max-width: ${constants.screen_tablet - 1}px) {
    width:300px;
  }
`;

export const Title = styled.div`
  text-align: center;
  padding-bottom: 32px;
`;
export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const Accept = styled.a`
  text-decoration: none;
  display: flex;
  color: ${constants.light_gray};
  background: linear-gradient(90deg, #0ec261 2.61%, #039f67 112.6%);
  :hover {
    background: linear-gradient(90deg, #0b934a 2.61%, #026e47 112.6%);
  }
  :active {
    background: linear-gradient(90deg, #076432 2.61%, #013c27 112.6%);
  }
  width: 177px;
  height: 48px;
  text-align: center;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  font: 500 normal 18px/21px "Roboto", sans-serif;
  @media (max-width: ${constants.screen_tablet - 1}px) {
    width:120px;
  }
`;
export const Reject = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${constants.light_gray};
  background: linear-gradient(90deg, rgb(73, 48, 19), rgb(123, 12, 59));
  :hover {
    filter: brightness(0.9);
  }
  :active {
    filter: brightness(0.8);
  }
  width: 177px;
  height: 48px;
  text-align: center;
  border-radius: 8px;
  font: 500 normal 18px/21px "Roboto", sans-serif;
  @media (max-width: ${constants.screen_tablet - 1}px) {
    width:120px;
  }
`;

export const Wrapper = styled.div`
  height: 100vh;
  z-index: 8;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 16px) repeat(86, 1fr);
  @media (min-width: ${constants.screen_dx_min}px) and (max-width: ${constants.screen_dx -
    1}px) {
    grid-template-columns: repeat(3, 16px) 17px repeat(86, 1fr);
  }
  @media (min-width: ${constants.screen_tablet}px) and (max-width: ${constants.screen_dx_min -
    1}px) {
    grid-template-columns: repeat(4, 21.5px) repeat(86, 1fr);
  }
  @media (max-width: ${constants.screen_tablet - 1}px) {
   
  }
`;

function Main(props) {
  const closeModal = () => {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
  };

  return (
    <Wrapper>
      <Sidebar gradient="black" />
      <FormMain orderPage={props.OrderPage} name={props.name} />
      <Modal id="modal">
        <ModalContainer>
          <Confirm>
            <Title>Подтвердите заказ</Title>
            <Buttons>
              <Accept href="/need_for_drive/ConfirmFinal">Подтвердить</Accept>
              <Reject
                onClick={() => {
                  closeModal();
                }}
              >
                Вернуться
              </Reject>
            </Buttons>
          </Confirm>
        </ModalContainer>
      </Modal>
    </Wrapper>
  );
}

export default Main;
