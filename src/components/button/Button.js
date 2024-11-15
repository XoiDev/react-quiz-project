import React, { Children } from "react";
import { Link } from "react-router-dom";

const Button = ({
  child,
  className = "",
  bgPrimary = "bg1",
  to = "",
  link = false,
}) => {
  switch (bgPrimary) {
    case "bg1":
      bgPrimary = "bg-1 text-white hover:bg-hover2";
      break;
    case "bg2":
      bgPrimary = "bg-2 text-black border-gray-400 border-1 hover:bg-hover1";
      break;
    default:
      break;
  }
  if (link === true) {
    return (
      <Link
        to={to}
        className={`inline-block px-6 py-2 text-center  h-10  bg-gray-900 rounded-lg transition-all no-underline  ${className} ${bgPrimary} `}
      >
        {child}
      </Link>
    );
  }
  return (
    <button
      className={`px-6 py-2 text-center font-semibold bg-gray-400 rounded-lg transition-all  ${className} ${bgPrimary} `}
    >
      {child}
    </button>
  );
};

export default Button;
