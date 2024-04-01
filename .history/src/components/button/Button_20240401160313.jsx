import React from "react";

const Button = ({onClick, className, children}) => {
  return (
    <button
      onClick={}
      className={`w-full px-6 py-3 mt-auto capitalize rounded-lg bg-primary`}
    >
      {children}
    </button>
  );
};

export default Button;
