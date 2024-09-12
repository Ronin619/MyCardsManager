import PropTypes from "prop-types";

const Button = ({ text, type = "button", className }) => {
  return (
    <button type={type} className={className}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
