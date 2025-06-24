import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
} from "@heroui/navbar";

import Logo from "./logo";

export const Navbar = () => {
  return (
    <HeroUINavbar
      maxWidth="lg"
      className="rounded-sm bg-gradient-to-l from-cyan-700 via-blue-500 to-indigo-600"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Logo />
          <div>
            <p className="font-sans font-bold text-gray-300 text-2xl">
              SILVABAK CLOUD TECH
            </p>
            <p className="text-sm italic text-gray-50 tracking-tighter">
              Innovating the future with intelligent automation.
            </p>
          </div>
        </NavbarBrand>
      </NavbarContent>
    </HeroUINavbar>
  );
};
