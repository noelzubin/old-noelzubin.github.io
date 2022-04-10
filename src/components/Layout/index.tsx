import React, { useState } from "react";
import Transition from "../Transition";
import Navbar from "../Navbar";
import ThemeContext from "../ThemeContext";
import SmoothScroll from "../SmoothScroll";
import "./index.sass";
import useTheme from "../useTheme";

interface LayoutProps {
  location: { pathname: string };
}

const Layout: React.FC<LayoutProps> = ({ children, location }) => {
  const { theme, toggleTheme } = useTheme();
  const [font, setFont] = useState("serif");

  return (
    <div className={`theme-${theme}`}>
      <ThemeContext.Provider value={theme}>
        <Navbar
          toggleTheme={toggleTheme}
          theme={theme}
          location={location}
          font={font}
          setFont={setFont}
        />
        <div className={`container font-${font}`}>
          <SmoothScroll location={location}>
            <Transition location={location}>{children}</Transition>
          </SmoothScroll>
        </div>
      </ThemeContext.Provider>
    </div>
  );
};

export default Layout;
