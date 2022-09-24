import { IconContext } from "react-icons";
// Components
import Logo from "./Logo";
const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-options-container">
        <span>Uno</span>
        <span>Dos</span>
      </div>
      <IconContext.Provider value={{ className: "NavBar-cake-icon" }}>
        <Logo />
      </IconContext.Provider>
    </div>
  );
};

export default NavBar;
