import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./redux/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import storageSession from 'redux-persist/lib/storage/session';
import { PersistGate } from 'redux-persist/integration/react';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: "root",
  whitelist:["orderCity","orderPoint","orderCar"],  
  storage:storageSession
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer, 
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);

ReactDOM.render(
  <BrowserRouter basename="/need_for_drive">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);


