import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import './App.css'
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import store from "./redux/store"
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navbar />
          <ProductList />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
