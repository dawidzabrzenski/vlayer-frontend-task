import { useState } from "react";
import BurgerIcon from "./BurgerIcon";
import Menu from "./Menu";
import Logo from "./Logo";
import Button from "../Button";

const menuLinks = [
  { name: "Rent", href: "#" },
  { name: "Buy", href: "#" },
  { name: "Sell", href: "#" },
  { name: "Manage Property", href: "#" },
  { name: "Resources", href: "#" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b-1 border-secondary sticky top-0 z-30 flex items-center justify-between bg-white px-8 py-5 md:px-16">
      <Logo />

      <div className="flex items-center md:hidden">
        <BurgerIcon isOpen={isOpen} setIsOpen={setIsOpen} />
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} menuLinks={menuLinks} />
      </div>

      <div className="hidden w-2/3 items-center justify-between gap-16 md:flex">
        <NavLinks links={menuLinks} />
        <div className="flex gap-4">
          <Button type="secondary">Login</Button>
          <Button type="primary">Sign Up</Button>
        </div>
      </div>
    </nav>
  );
}

function NavLinks({ links }) {
  return (
    <ul className="flex gap-14">
      {links.map((el) => (
        <li key={el.name}>
          <a
            href={el.href}
            className="hover:text-primary text-base font-medium leading-6 transition-colors duration-200"
          >
            {el.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
