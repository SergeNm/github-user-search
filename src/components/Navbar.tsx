import React from "react";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import Cart from "./Cart";
import ThemeButton from "./ThemeButton";

export default function Navbar() {
  const { themeName } = useAppSelector((state) => state.theme.theme);
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav
        className={
          "relative shadow-lg " +
          (themeName === "dark" ? "bg-gray-700" : " bg-white ") +
          " flex flex-wrap items-center justify-between px-2 py-3 "
        }
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to="/">
              <span
                className={
                  (themeName === "dark" ? "text-white" : "text-gray-800") +
                  " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                }
              >
                Home
              </span>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <span className="text-white">
                <BiMenu />
              </span>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <span
                  className={
                    (themeName === "dark"
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                >
                  <i
                    className={
                      (themeName === "dark"
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " far fa-file-alt text-lg leading-lg mr-2"
                    }
                  />{" "}
                  About
                </span>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex md:flex-row items-center">
                <ThemeButton themeName={themeName} />
                <Cart />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
