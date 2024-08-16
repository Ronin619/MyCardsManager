import PropTypes from "prop-types";
import "../css/backdrop.css";

const Backdrop = ({ show }) => {
  if (!show) return null;

  return <div className="backdrop"></div>;
};

Backdrop.propTypes = {
  show: PropTypes.bool,
};

export default Backdrop;
