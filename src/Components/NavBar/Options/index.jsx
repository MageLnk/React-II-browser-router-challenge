import { Link } from "react-router-dom";
// Style
import { RiHomeHeartFill, RiBook2Fill } from "react-icons/ri";
// App
const NavBarOptions = () => {
  return (
    <div className="navbar-options-container">
      <Link to="/">
        <span>
          Home <RiHomeHeartFill />
        </span>
      </Link>
      <Link to="/contact">
        <span>
          Contacto <RiBook2Fill />
        </span>
      </Link>
    </div>
  );
};

export default NavBarOptions;
