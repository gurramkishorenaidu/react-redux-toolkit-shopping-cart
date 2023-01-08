import React, { useState, useEffect } from "react";
import Data from "../Data";
import { useDispatch } from "react-redux";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/cartSlice";

const ProductList = () => {
  const [products, setProducts] = useState(Data);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, change) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: (product.quantity || 0) + change, 
          };
        }
        return product;
      })
    );

    if (change === 1) {
      dispatch(addToCart({ id, title: "", price: 0 }));
    } else {
      dispatch(decrementQuantity(id));
    }
  };

  const productList = products.map((product) => {
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
                {product.quantity === 0 || !product.quantity ? (
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
                    <span className="px-2">{product.quantity}</span>
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
