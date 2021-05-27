import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./redux/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
); 

ReactDOM.render(
  <BrowserRouter basename="/need_for_drive">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
