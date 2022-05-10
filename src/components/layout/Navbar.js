import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function Navbar({ icon, title }) {
  return (
    <nav className="flex justify-between px-5 py-3 text-white bg-red-500">
      <div>
        <h1 className="text-lg font-semibold">
          <i className={`${icon} mr-1`}></i>
          {title}
        </h1>
      </div>
      <div>
        <NavLink to="/" className="mx-2">
          Home
        </NavLink>
        <NavLink to="/about" className="mx-2">
          About
        </NavLink>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
