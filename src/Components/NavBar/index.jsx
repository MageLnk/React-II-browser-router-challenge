import { IconContext } from "react-icons";
import { RiCake2Fill } from "react-icons/ri";
const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-options-container">
        <span>Uno</span>
        <span>Dos</span>
      </div>
      <IconContext.Provider value={{ className: "NavBar-cake-icon" }}>
        <div className="navbar-logo-container">
          Happy Cake <RiCake2Fill />
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default NavBar;
