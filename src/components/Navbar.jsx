import { useSelector } from "react-redux";
import { useState } from "react";

const Navbar = () => {
  const cartCount = useSelector((state) => state.cartCount);
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <header className="flex items-center justify-between py-3 bg-gray-800 px-16">
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
          <span className="bg-teal-500 rounded-full px-2 py-1 font-semibold text-xs text-white cursor-pointer">
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
            className="fixed right-0 top-0 bottom-0 bg-white w-[30%] p-4 transform transition-transform ease-in-out duration-500"
            style={{ transform: "translateX(0)" }}
          >
            <button
              type="button"
              onClick={toggleDrawer}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            {/* Add your cart list here */}
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
