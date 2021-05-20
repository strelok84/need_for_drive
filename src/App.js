import "./styles/_constants.scss";
import "./App.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "./pages/Main/Main";
import OrderPage from "./pages/OrderPage/OrderPage";


function App() {
  return (
    <div className="App">
      <Switch>        
        <Route path="/map" >
          {<OrderPage name="place" OrderPage="MapMain" />}
        </Route>
        <Route path="/model">
          {<OrderPage name="model" OrderPage="ModelMain" />}
        </Route>
        <Route path="/add" >
          {<OrderPage name="add" OrderPage="AddMain" />}
        </Route>        
        <Route exact path="/" component={Main} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
