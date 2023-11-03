import React from "react";
import Logo from "./Logo";
import ContentWrapper from "./ContentWrapper";

const Navbar = () => {
  return (
    <nav className="w-full absolute top-0 left-0 right-0 max-w-screen-xl my-0 mx-auto p-4 flex items-center justify-between">
      <Logo />
      <ul className="flex gap-8">
        <li>My name is</li>
        <li>Cuadros</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
};

export default Navbar;
