"use client";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <UserButton />
    </div>
  );
};

export default Navbar;
