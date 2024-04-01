import React from "react";

const Button = ({
  // eslint-disable-next-line react/prop-types
  onClick,
  className,
  children,
  type = "button",
  bgColor = "primary",
}) => {
  let bgClassname = "bg-primary";
  switch (bgColor) {
    case "primary":
      bgClassname = "bg-primary";
      break;
    case "secondary":
      bgClassname = "bg-secondary";
      break;
    default:
      break;
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full px-6 py-3 mt-auto capitalize rounded-lg ${bgClassname} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
