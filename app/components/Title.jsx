import React from "react";
import { smooch } from "../fonts";

const Title = ({ children, className }) => {
  return (
    <h2 className={`${smooch.className} text-6xl ${className}`}>{children}</h2>
  );
};

export default Title;
