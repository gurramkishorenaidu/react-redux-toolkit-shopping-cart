import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import './App.css'
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList"
import  store  from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <ProductList />
      </Provider>
    </div>
  );
}

export default App;
