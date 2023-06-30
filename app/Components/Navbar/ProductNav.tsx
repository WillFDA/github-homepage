"use client";
import React, { useState } from "react";

import NavList2 from "./NavUtils/Navlist2";
import Navlist from "./NavUtils/Navlist";
type Props = {};

const ProductNav = (props: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const handleClick = () => {
    if (window.innerWidth < 1024) {
      setShow(!show);
    }
  };

  const handleMouseEnter = () => {
    if (window.innerWidth > 1024) {
      setShow(true);
    }
  };
  const handleMouseLeave = () => {
    if (window.innerWidth > 1024) {
      setShow(false);
    }
  };
  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        onClick={() => setShow(!show)}
        type="button"
        className={`flex items-center p-1 max-lg:font-semibold transition ease-in duration-150 max-lg:justify-between max-lg:w-full ${
          show ? "lg:text-neutral-300" : ""
        }`}
      >
        Product
      </button>
    </li>
  );
};

export default ProductNav;
