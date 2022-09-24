import { IconContext } from "react-icons";
// Components
import Logo from "./Logo";
import NavBarOptions from "./Options";
// App

const NavBar = () => {
  return (
    <div className="navbar-container">
      <IconContext.Provider value={{ className: "NavBar-icon-options" }}>
        <NavBarOptions />
      </IconContext.Provider>
      <IconContext.Provider value={{ className: "NavBar-cake-icon" }}>
        <Logo />
      </IconContext.Provider>
    </div>
  );
};

export default NavBar;
