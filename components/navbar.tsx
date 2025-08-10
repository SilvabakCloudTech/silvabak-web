import {
  Navbar as HeroUINavbar, 
  NavbarContent,
  NavbarBrand,
} from "@heroui/navbar";

import Logo from "./logo";

export const Navbar = () => {
  return (
    <HeroUINavbar  className="rounded-sm bg-gradient-to-l from-cyan-700 via-blue-500 to-indigo-600">
      <NavbarContent>
            <Logo />
      </NavbarContent>
    </HeroUINavbar>
  );
};
