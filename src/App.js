import "./constants/_constants.scss";
import "./App.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
