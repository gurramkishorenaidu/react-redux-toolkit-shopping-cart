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
            id="drawer-right-example"
            className={`fixed z-40 h-screen p-4 overflow-y-auto bg-white w-30% right-0 top-0 transform ${
              showDrawer ? "translate-x-0" : "translate-x-full"
            }`}
            tabIndex="-1"
            aria-labelledby="drawer-right-label"
          >
            <h5
              id="drawer-right-label"
              className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
            >
              Right Drawer
            </h5>
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
              <span className="sr-only">Close menu</span>
            </button>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
              Some content for the drawer goes here...
            </p>
          </div>
          <div
            className="fixed top-0 left-0 h-screen w-100vw bg-black bg-opacity-75"
            onClick={toggleDrawer}
          ></div>
        </>
      )}
    </header>
  );
};

export default Navbar