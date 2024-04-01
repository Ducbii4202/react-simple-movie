import React from "react";

// eslint-disable-next-line react/prop-types
const Button = ({
  onClick,
  className,
  children,
  type = "button",
  bgColor = "primary",
}) => {
  let bgClassname = "bg-primary";
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
