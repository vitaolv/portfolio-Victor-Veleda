'use client'

import "../css/transitionTop.css";

import { useDispatch, useSelector } from "react-redux";
import { MenuBurgerIsOpen, MenuBurgerIsClose } from "../store/Actions/MenuActions";
import { RootState } from "../store";
import { useEffect, useRef, useState } from "react";
import { MenuNavigation } from "./MenuNavigation";

import Image from "next/image";

export function ButtonBurger() {

  const isOpen = useSelector((state: RootState) => state.menuBurger.menuIsOpen);
  const dispatch = useDispatch();
  const menuRef = useRef<HTMLButtonElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(isOpen);

  const handleBurgerClick = () => {
    const action = isOpen ? MenuBurgerIsClose() : MenuBurgerIsOpen();
    dispatch(action);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1044) {
        dispatch(MenuBurgerIsClose());
        document.body.classList.remove("blur-background");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);


  useEffect(() => {

    const handleBodyClick = (e: MouseEvent) => {

      if (menuRef.current && !menuRef.current.contains(e.target as Node) && isMenuOpen) {
        dispatch(MenuBurgerIsClose());
        setIsMenuOpen(false);
      }
    };

    if (isOpen) {
      document.body.addEventListener('click', handleBodyClick);
    }
    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };

  }, [menuRef, isOpen, dispatch, isMenuOpen]);

  return (
    <>
      <button
        type="button"
        className={`absolute right-4 top-5 h-14 rounded-full border-2 border-green-700 p-2 screen-menu-min:hidden outline-none 
                        ${isOpen ? "rotate-180 border-2 border-turquoise-100" : "scale-100 border-2 border-green-700 p-2"
          } transition-transform md:flex-grow-0`}
        onClick={handleBurgerClick}
        ref={menuRef}
      >
        {isOpen ? (
          <p className="h-8 w-8 bg-gray-900 bg-opacity-20 font-alt text-2xl text-turquoise-100">
            X
          </p>
        ) : (
          <Image
            src="/portfolio-Victor-Veleda/assets/icons/burger.svg"
            width={8} height={8} alt="menu-burger"
            priority={true}
            className="h-8 w-8 transform-gpu bg-gray-900 bg-opacity-20 text-green-700 
            transition-transform duration-300 ease-in-out"
          />
        )}
      </button>
      {isOpen ? (
        <div
          className="pb-6 origin-top animate-topOriginMenu pt-2 left-0 right-0 top-24 w-full h-50
        flex flex-col rounded-lg border-2 border-turquoise-100 bg-gray-900 absolute transform
        duration-500 ease-in-out transition-transform md:flex"
        >
          <MenuNavigation />
        </div>
      ) : null
      }
    </>
  );
}
