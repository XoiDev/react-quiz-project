import React from "react";

const DivBlock = ({ className = "", child }) => {
  return <div className={`mt-12`}>{child}</div>;
};

export default DivBlock;
