import React, { useState } from "react";

function Drawer() {
  const [showDrawer, setShowDrawer] = useState(false);

  const handleDrawerToggle = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <div>
      <div className="text-center">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button"
          onClick={handleDrawerToggle}
        >
          Show right drawer
        </button>
      </div>

      <div
        id="drawer-right-example"
        className={`fixed z-40 h-screen p-4 overflow-y-auto bg-white w-[30%] dark:bg-gray-800 transition-transform right-0 top-0 ${
          showDrawer ? "translate-0" : "translate-x-full"
        }`}
        tabIndex="-1"
        aria-labelledby="drawer-right-label"
      >
        <h5
          id="drawer-right-label"
          className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
        >
          <svg
            className="w-5 h-5 mr-2"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            ></path>
          </svg>
          Right drawer
        </h5>
        <button
          type="button"
          onClick={handleDrawerToggle}
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
          Supercharge your hiring by taking advantage of our{" "}
          <a
            href="#"
            className="text-blue-600 underline dark:text-blue-500 hover:no-underline"
          >
            limited-time sale
          </a>{" "}
          for Flowbite Docs + Job Board. Unlimited access to over 190K
          top-ranked candidates and the #1 design job board.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {/* Add the missing closing tags for the p and div elements and appropriate classes */}
        </div>
      </div>
    </div>
  );
}

export default Drawer;
