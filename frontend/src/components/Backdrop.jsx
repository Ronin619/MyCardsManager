import PropTypes from "prop-types";
import "../css/backdrop.css"; // Import the CSS file for backdrop styling

const Backdrop = ({ show }) => {
  if (!show) return null;

  return <div className="backdrop"></div>;
};

Backdrop.propTypes = {
  show: PropTypes.bool,
};

export default Backdrop;
