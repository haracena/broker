"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import ContentWrapper from "./ContentWrapper";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState();

  return (
    <nav className="w-full absolute top-0 left-0 right-0 max-w-screen-xl my-0 mx-auto p-4 flex items-center justify-between bg-[100%_50%]">
      <Logo className={"hidden sm:block"} />
      <ul className="flex w-full justify-around sm:justify-end gap-8 sm:gap-12">
        <li className="hover:scale-125 transition-all duration-300 cursor-pointer">
          <Link to="mynameis" smooth offset={-120} duration={350}>
            My name is
          </Link>
        </li>
        <li className="hover:scale-125 transition-all duration-300 cursor-pointer">
          <Link to="cuadros" smooth offset={-100} duration={350}>
            Cuadros
          </Link>
        </li>
        <li className="hover:scale-125 transition-all duration-300 cursor-pointer">
          <Link to="contacto" smooth offset={-100} duration={350}>
            Contacto
          </Link>
        </li>
      </ul>
      {/* <li>{isOpen ? "X" : "="}</li> */}
    </nav>
  );
};

export default Navbar;
