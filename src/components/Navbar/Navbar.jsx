import { useState } from "react";
import BurgerIcon from "./BurgerIcon";
import Menu from "./Menu";
import Logo from "./Logo";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-30 flex w-screen justify-between bg-white px-8 py-5">
      <Logo />
      <BurgerIcon isOpen={isOpen} setIsOpen={setIsOpen} />
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
}

export default Navbar;
