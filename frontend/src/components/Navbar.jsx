import HamburgerMenu from "./HamburgerMenu";
import "../css/navbar.css";
import PropTypes from "prop-types";

const Navbar = ({ className, h1 }) => {
  return (
    <header className={`navbar ${className}`}>
      <h1>{h1}</h1>
      <HamburgerMenu />
    </header>
  );
};

Navbar.propTypes = {
  h1: PropTypes.string,
  className: PropTypes.string,
};

export default Navbar;
