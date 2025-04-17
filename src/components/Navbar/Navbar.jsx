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
    <nav className="border-secondary sticky top-0 z-30 border-b bg-white px-8 py-5 md:px-16">
      <div className="flex w-full items-center justify-between md:hidden">
        <Logo />
        <div className="flex items-center">
          <BurgerIcon isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>

      <Menu isOpen={isOpen} setIsOpen={setIsOpen} menuLinks={menuLinks} />

      <div className="hidden w-full items-center md:grid md:grid-cols-3">
        <div className="flex items-center">
          <Logo />
        </div>
        <div className="flex justify-center">
          <NavLinks links={menuLinks} />
        </div>
        <div className="flex justify-end gap-4">
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
            className="hover:text-primary whitespace-nowrap text-base font-medium leading-6 transition-colors duration-200"
          >
            {el.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
