import "./styles/_constants.scss";
import "./App.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "./pages/Main/Main";
import LocationPage from "./pages/OrderPage/LocationPage";
import ModelPage from "./pages/OrderPage/ModelPage";

function App() {
  return (
    <div className="App">
      <Switch>        
        <Route path="/map" component={LocationPage} />
        <Route path="/model" component={ModelPage} />
        <Route exact path="/" component={Main} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;

