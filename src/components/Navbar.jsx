import { useSelector } from "react-redux";

const Navbar = () => {
  const cartCount = useSelector((state) => state.cartCount); // get the cart slice of the store
   
  console.log(cartCount)

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
        >
          <path d="M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
        </svg>
        {cartCount > 0 && (
          <span className="bg-teal-500 rounded-full px-2 py-1 font-semibold text-xs text-white">
            {cartCount}
          </span>
        )}
      </div>
    </header>
  );
};

export default Navbar;
