import React from "react";
import Data from "../Data";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, decrementQuantity } from "../redux/cartSlice";

const ProductList = () => {
  const dispatch = useDispatch();

  const handleQuantityChange = (productId, change) => {
    if (change === 1) {
      dispatch(addToCart({ id: productId, title: "", price: 0 }));
    } else {
      dispatch(decrementQuantity(productId));
    }
  };

  const productList = Data.map((product) => {
    const item = useSelector((state) =>
      state.cart.find((item) => item.id === product.id)
    );
    const quantity = item ? item.quantity : 0;
    return (
      <div key={product.id} className="w-64 rounded-lg shadow-lg m-4">
        <img
          src={product.img}
          alt={product.title}
          className="w-full h-auto object-contain mx-auto pt-4 hover:scale-110 transition-ease-in-out-500"
          style={{ width: "150px", height: "150px" }}
        />
        <div className="p-4">
          <div className="font-bold text-xl mb-2">{product.title}</div>
          <div className="flex justify-between items-center m-2">
            <p className="text-gray-700 text-base pt-4">${product.price}</p>
            <div className="mt-4">
              <div className="flex items-center text-gray-100 bg-teal-500">
                {quantity === 0 || !quantity ? (
                  <button
                    className="bg-teal-500 px-3 py-1 text-gray-100"
                    onClick={() => {
                      handleQuantityChange(product.id, 1);
                    }}
                  >
                    Add
                  </button>
                ) : (
                  <>
                    <button
                      className="bg-teal-500 px-3 py-1 text-gray-100"
                      onClick={() => {
                        handleQuantityChange(product.id, -1);
                      }}
                    >
                      -
                    </button>
                    <span className="px-2">{quantity}</span>
                    <button
                      className="bg-teal-500 px-3 py-1 text-gray-100"
                      onClick={() => {
                        handleQuantityChange(product.id, 1);
                      }}
                    >
                      +
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="flex flex-wrap justify-center items-center">
      {productList}
    </div>
  );
};

export default ProductList;
