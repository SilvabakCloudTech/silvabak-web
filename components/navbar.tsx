"use client";

import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@heroui/react";
import Logo from "@/components/logo";

const NavbarComponent: React.FC = () => {
  return (
    <Navbar maxWidth="lg" className="bg-background">
      <NavbarBrand>
        <Logo />
        <p className="font-bold text-inherit px-2">Silvabak Cloud Tech</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#services">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComponent;