import React from "react";
import { Theme } from "../../../models/models";
import { FiMoon } from "react-icons/fi";
import { BsLightningCharge } from "react-icons/bs";
import { useAppDispatch } from "../../../redux/hooks";
import { setTheme } from "../../../redux/slices/theme";

const ThemeButton = ({ themeName }: Theme) => {
  const dispatch = useAppDispatch();
  return (
    <button
      className="flex px-4 items-center"
      onClick={() =>
        themeName === "light"
          ? dispatch(setTheme({ themeName: "dark" }))
          : dispatch(setTheme({ themeName: "light" }))
      }
    >
      <span className="px-2">
        {themeName === "dark" ? <BsLightningCharge /> : <FiMoon />}
      </span>
      <span className={"text-lg"}>
        {themeName === "dark" ? "Light Mode" : "Dark Mode"}
      </span>
    </button>
  );
};

export default ThemeButton;
