import React from "react";
import { NacLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-center py-10 mb-5 text-white header gap-x-5">
      <span className="text-primary">Home</span>
      <span>Movies</span>
    </header>
  );
};

export default Header;
