import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import './App.css'
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import store from "./redux/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

let persistor = persistStore(store);

function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navbar />
          <ProductList />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
