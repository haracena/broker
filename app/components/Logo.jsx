import React from "react";
import { smooch } from "../fonts";

const Logo = ({ className }) => {
  return (
    <div className={`${smooch.className} text-5xl ${className}`}>Broker</div>
  );
};

export default Logo;
