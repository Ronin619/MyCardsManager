import Hamburgermenu from "./HamburgerMenu";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <h1>Welcome!</h1>
      <Hamburgermenu />
    </header>
  );
};

export default Navbar;
