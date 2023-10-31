'use client'

import "../css/transitionTop.css";

import { useDispatch, useSelector } from "react-redux";
import { MenuBurgerIsOpen, MenuBurgerIsClose } from "../store/Actions/MenuActions";
import { RootState } from "../store";


export function ButtonBurger() {

  const isOpen = useSelector((state: RootState) => state.menuBurger.menuIsOpen);

  const dispatch = useDispatch();

  const handleBurgerClick = () => {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
      dispatch(MenuBurgerIsOpen());
    } else {
      document.body.style.overflow = "";
      dispatch(MenuBurgerIsClose());
    }
  };



  return (
    <button
      type="button"
      className={`left-0 rounded-full border-2 border-blue-100 p-2 md:hidden outline-none 
                        ${isOpen ? "rotate-180 border-2 border-blue-100" : "scale-100 border-2 border-green-700 p-2"
        } transition-transform md:flex-grow-0`}
      onClick={handleBurgerClick}
    >
      {isOpen ? (
        <p className="h-8 w-8 bg-gray-900 bg-opacity-20 font-alt text-2xl text-blue-100">X</p>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-8 w-8 transform-gpu bg-gray-900 bg-opacity-20 text-green-100 transition-transform duration-300 ease-in-out"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      )}
    </button>
  );
}
