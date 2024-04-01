import React from "react";

// eslint-disable-next-line react/prop-types
const Button = ({ onClick, className, children, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full px-6 py-3 mt-auto capitalize rounded-lg bg-primary ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
