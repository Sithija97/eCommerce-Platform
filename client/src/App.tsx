import logo from "./assets/logo.png";
import { IoSearch, IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaRegBell, FaPlus } from "react-icons/fa6";

const App = () => {
  return (
    <div>
      <header className="w-full bg-dark p-2">
        <div className="flex items-center  mx-4">
          <img src={logo} alt="logo" className="w-8 h-8 mr-4" />
          <form
            action=""
            className="flex bg-dark-brighter_gray mx-4 px-3 rounded-md border border-gray-700"
          >
            <IoSearch className="w-6 h-6 mt-1 text-gray-300" />
            <input
              type="text"
              className="bg-dark-brighter_gray text-sm p-1 pl-2 pr-0 block focus:outline-none text-gray-300"
              placeholder="Search"
            />
          </form>
          <button className="px-2 py-1">
            <IoChatbubbleEllipsesOutline className="text-white w-6 h-6 m-1 mx-2" />
          </button>
          <button className="px-2 py-1">
            <FaRegBell className="text-white w-6 h-6 m-1 mx-2" />
          </button>
          <button className="px-2 py-1">
            <FaPlus className="text-white w-6 h-6 m-1 mx-2" />
          </button>
        </div>
      </header>
    </div>
  );
};
export default App;
