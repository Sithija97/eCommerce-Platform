import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";
import { IoSearch, IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaRegBell, FaPlus, FaAngleDown } from "react-icons/fa6";

export const Header = () => {
  return (
    <header className="w-full bg-dark p-2">
      <div className="flex mx-4">
        <img src={logo} alt="logo" className="w-8 h-8 mr-4" />
        <form
          action=""
          className="flex flex-grow items-center bg-dark-brighter_gray mx-4 px-3 rounded-md border border-gray-700"
        >
          <IoSearch className="w-6 h-6 mt-1 text-gray-300" />
          <input
            type="text"
            className="bg-dark-brighter_gray text-sm p-1 pl-2 pr-0 block focus:outline-none text-gray-300"
            placeholder="Search"
          />
        </form>
        <button className="px-2 py-1">
          <IoChatbubbleEllipsesOutline className="text-gray-400 w-6 h-6 m-1 mx-2" />
        </button>
        <button className="px-2 py-1">
          <FaRegBell className="text-gray-400 w-6 h-6 m-1 mx-2" />
        </button>
        <button className="px-2 py-1">
          <FaPlus className="text-gray-400 w-6 h-6 m-1 mx-2" />
        </button>

        <button className="flex items-center rounded-md">
          <div className=" bg-gray-600 rounded-md">
            <img
              src={avatar}
              alt="avatar"
              className="w-8 h-8"
              style={{ filter: "invert(100%)" }}
            />
          </div>
          <FaAngleDown className="text-gray-500 w-5 h-5 mt-2 ml-2" />
        </button>
      </div>
    </header>
  );
};
