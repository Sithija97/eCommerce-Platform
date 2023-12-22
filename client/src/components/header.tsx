import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";
import { IoSearch, IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaRegBell, FaPlus, FaAngleDown } from "react-icons/fa6";
import { HiOutlineUser } from "react-icons/hi2";
import { MdOutlineLogin } from "react-icons/md";
import { Button } from "./button";
import { useState, useEffect, useRef } from "react";

export const Header = () => {
  const userDropdownRef = useRef<HTMLButtonElement>(null);
  const [userDropdownVisibilityClass, setUserDropdownVisibilityClass] =
    useState<string>("hidden");

  const toggleUserDropdownVisibilityClass = () => {
    userDropdownVisibilityClass === "hidden"
      ? setUserDropdownVisibilityClass("block")
      : setUserDropdownVisibilityClass("hidden");
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      userDropdownRef.current &&
      !userDropdownRef.current.contains(event.target as Node)
    ) {
      setUserDropdownVisibilityClass("hidden");
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full bg-dark p-2">
      <div className="flex items-center mx-4 relative">
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

        <div className="mx-2 hidden sm:block">
          <Button styles="ml-2 mr-1" label="Log In" />
          <Button filled label="Sign Up" />
        </div>

        <button
          ref={userDropdownRef}
          className="flex items-center rounded-md border border-gray-700"
          onClick={toggleUserDropdownVisibilityClass}
        >
          <HiOutlineUser className="w-6 h-6 text-gray-400 m-1" />
          <div className=" bg-gray-600 rounded-md w-8 h-8">
            <img
              src={avatar}
              alt="avatar"
              className="block"
              style={{ filter: "invert(100%)" }}
            />
          </div>
          <FaAngleDown className="text-gray-500 w-5 h-5 mt-2 m-1" />
        </button>

        <div
          className={`absolute rounded-md right-0 top-8 bg-dark border border-gray-700 text-text z-10 overflow-hidden ${userDropdownVisibilityClass}`}
        >
          <button
            className="flex items-center w-50 py-2 px-3 hover:bg-gray-300 hover:text-black text-sm"
            onClick={() => console.log("login modal")}
          >
            <MdOutlineLogin className="w-5 h-5 mr-2" />
            Log In / Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};
