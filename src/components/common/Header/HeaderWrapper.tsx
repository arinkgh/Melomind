"use client";

import React from "react";
import HeaderLogin from "./HeaderLogin";
import HeaderItems from "./HeaderItems";

const HeaderWrapper = () => {
  return (
    <header className="container mx-auto flex flex-row justify-between items-center h-20 px-4 mt-6">
      <HeaderItems />
      <HeaderLogin />
    </header>
  );
};

export default HeaderWrapper;



