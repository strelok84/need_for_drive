import { Route, Switch, Redirect } from "react-router-dom";
import Main from "./pages/Main/Main";
import OrderPage from "./pages/OrderPage/OrderPage";
import styled from "styled-components/macro";

export const AppStyle = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  mix-blend-mode: normal;
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
`;

function App() {
  return (
    <AppStyle>
      <Switch>
        <Route path="/map">
          {<OrderPage name="place" OrderPage="MapMain" />}
        </Route>
        <Route path="/model">
          {<OrderPage name="model" OrderPage="ModelMain" />}
        </Route>
        <Route path="/add">
          {<OrderPage name="add" OrderPage="AddMain" />}
        </Route>
        <Route path="/final">
          {<OrderPage name="final" OrderPage="FinalMain" />}
        </Route>
        <Route exact path="/" component={Main} />
        <Redirect to="/" />
      </Switch>
    </AppStyle>
  );
}

export default App;
