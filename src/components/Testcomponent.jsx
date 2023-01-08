import { useSelector } from "react-redux";

const cartCount = useSelector((state) => state.cartCount); // get the cart slice of the store
   
  console.log(cartCount)
