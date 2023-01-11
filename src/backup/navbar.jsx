import { useSelector } from "react-redux";
import { useState } from "react";

const Navbar = () => {
  const cartCount = useSelector((state) => state.cartCount);
  // const cart = useSelector((state) => state.cart);
  console.log(cart)
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <header className="flex items-center justify-between py-3 bg-gray-800 px-16 sticky top-0">
      <div className="flex items-center font-bold text-xl text-white mr-6">
        My App
      </div>
      <div className="flex items-center text-white">
        <svg
          className="fill-current w-6 h-6 mr-2 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          onClick={toggleDrawer}
        >
          <path d="M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
        </svg>
        {cartCount > 0 && (
          <span className="absolute right-12 top-1 bg-teal-500 rounded-full px-2 py-1 font-semibold text-xs text-white cursor-pointer">
            {cartCount}
          </span>
        )}
      </div>
      {showDrawer && (
        <>
          <div
            className="fixed left-0 top-0 bottom-0 bg-gray-500 bg-opacity-50 w-screen h-screen z-140"
            style={{ pointerEvents: "none" }}
          ></div>
          <div
            className="fixed right-0 top-0 bottom-0 bg-white w-[30%] p-4 transform transition-transform ease-in-out duration-1000"
            style={{ transform: "translateX(0)" }}
          >
            <button
              className="absolute top-0 left-0 m-4"
              onClick={toggleDrawer}
            >
              <svg
                className="fill-current w-4 h-4 text-gray-400 hover:text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            </button>
            {cart.length === 0 ? (
              <p className="text-xl font-semibold text-center">Your cart is empty</p>
            ) : (
              <ul>
                {cart.map((item) => (
                  <li key={item.id}>
                    {item.title}
                    {item.price}
                    <button
                      className="ml-2"
                      onClick={() => removeItemFromCart(item.id)}
                    >
                      XYZ Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
