import "./constants/_constants.scss";
import "./App.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "./pages/Main/Main";
import OrderPage from "./pages/OrderPage/OrederPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/map" component={OrderPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;

/* import "./constants/_constants.scss";
import "./App.scss";
import { Route, Switch, Redirect } from "react-router-dom";

import Map from "./pages/Map";

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/map" component={Map} />
        <Route exact path="/" component={Main} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App; */