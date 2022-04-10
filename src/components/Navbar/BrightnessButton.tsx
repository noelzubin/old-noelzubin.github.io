import React from "react";
import sun from "./sun.svg";
import moon from "./moon.svg";
import coffee from "./coffee.svg";
import * as s from "./index.module.sass";

const alt = "toggle brightness icon";

const BrightnessButton = ({ theme, toggleTheme }) => (
  <button className={s.brightnessBtn} onClick={toggleTheme}>
    {theme === "light" && <img alt={alt} src={sun} />}
    {theme === "dark" && <img alt={alt} src={moon} />}
    {theme === "coffee" && <img alt={alt} src={coffee} />}
  </button>
);

export default BrightnessButton;
