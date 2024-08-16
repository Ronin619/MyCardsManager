import Hamburgermenu from "./HamburgerMenu";
import "../css/header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Welcome!</h1>
      <Hamburgermenu />
    </header>
  );
};

export default Header;
