import "./button.scss";

export const Button = ({ label, type, ...otherProps }) => (
  <button className={type ? `button${type}` : "button"} {...otherProps}>
    {label}
  </button>
);

export default Button;
